import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { JSDOM } from "jsdom";
import createDOMPurify from "dompurify";

// Load environment variables
dotenv.config();

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const Port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());

// Configure CORS with specific allowed origins
const allowedOrigins = [
 // 'https://briskwell.com',          // Production frontend
  //'https://www.briskwell.com',      // www subdomain
  'http://localhost:5000',          // Local development frontend
  'http://localhost:5173'           // Vite default dev server
];

// Secure CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,  // Enable cookies/auth headers if needed
  maxAge: 86400      // Cache preflight requests for 24 hours
}));

// Security headers
app.use((req, res, next) => {
    // Content Security Policy
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://images.unsplash.com https://res.cloudinary.com; frame-src 'self' https://www.youtube.com;"
    );
  
    // Other security headers remain the same
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
    next();
});

// Email transporter configuration with environment variables
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
    },
});

// Email rate limiter - 3 emails per hour per IP
const emailLimiter = rateLimit({
  windowMs: 60 *60 * 30 , // 1/2 hour
  max: 5, // 5 requests per window
  message: { success: false, message: 'Too many requests, please try again later.' }
});

// Email sending endpoint with proper sanitization
app.post('/sendemail', emailLimiter, async (req, res) => {
  try {
    const { name, email, subject, text } = req.body;
    
    // Check if email environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_SERVICE) {
      console.error('ERROR: Missing email configuration in .env file');
      return res.status(500).json({ 
        success: false, 
        message: 'Server email configuration error'
      });
    }
    
    if (!process.env.EMAIL || !process.env.RECIPIENT_EMAIL) {
      console.error('ERROR: Missing sender or recipient email in .env file');
      return res.status(500).json({
        success: false,
        message: 'Server email address configuration error'
      });
    }
    
    // Input validation
    if (!name || !email || !subject || !text) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format' });
    }
    
    // Sanitize inputs
    const sanitizedName = DOMPurify.sanitize(name);
    const sanitizedEmail = DOMPurify.sanitize(email);
    const sanitizedSubject = DOMPurify.sanitize(subject);
    const sanitizedText = DOMPurify.sanitize(text);
    
    // Create safe HTML content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Message from: ${sanitizedName}</h2>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <div style="margin-top: 20px; padding: 10px; background-color: #f5f5f5; border-left: 4px solid #007bff;">
          ${sanitizedText.split('\n').map(line => `<p style="margin: 5px 0;">${line}</p>`).join('')}
        </div>
      </div>
    `;
    
    // Before sending email, log the attempt
    console.log(`Attempting to send email from ${process.env.EMAIL} to ${process.env.RECIPIENT_EMAIL}`);
    
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Website Inquiry: ${sanitizedSubject}`,
      html: htmlContent,
      replyTo: sanitizedEmail
    };
    
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (emailError) {
      console.error('Nodemailer error:', emailError);
      return res.status(500).json({ success: false, message: 'Failed to send email: ' + emailError.message });
    }
    
  } catch (error) {
    console.error('Email processing error:', error);
    return res.status(500).json({ success: false, message: 'Failed to process email request' });
  }
});

// Server startup
app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
});