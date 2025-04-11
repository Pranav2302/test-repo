import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const Port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for frontend requests

// Email transporter configuration with environment variables
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'pranavtrade23@gmail.com',
        pass: process.env.EMAIL_PASS || 'fujymhvsamrmsglp', 
    },
});

// Email sending endpoint
app.post('/sendemail', async(req, res) => {
    const { to, subject, text } = req.body;
    
    if (!subject || !text) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    console.log('Sending email to:', to || process.env.DEFAULT_RECIPIENT || "Prajwalkorade@gmail.com");

    const mailOptions = {
        from: process.env.EMAIL_FROM || 'pranavkamble663@gmail.com',
        to: to || process.env.DEFAULT_RECIPIENT || "Prajwalkorade@gmail.com",
        subject: subject,
        text: text,
        // HTML version
        html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #0066cc;">New Contact Form Submission</h2>
                <div style="border-left: 4px solid #0066cc; padding-left: 15px; margin: 20px 0;">
                    ${text.split('\n').map(line => `<p style="margin: 5px 0;">${line}</p>`).join('')}
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 30px;">This email was sent from the ${process.env.COMPANY_NAME || 'Briskwell International'} contact form.</p>
               </div>`
    };
     
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
        res.json({
            success: true,
            message: 'Email sent successfully',
            info
        });
    } catch (error) {
        console.error('Error sending email:', error);
        
        // Get detailed error message
        let errorMessage = 'Failed to send your message. Please try again later.';
        if (error.response) {
            // The server responded with an error status
            errorMessage = error.response.data.error || errorMessage;
        } else if (error.request) {
            // The request was made but no response was received
            errorMessage = 'Could not connect to our servers. Please check your internet connection.';
        }
        
        res.status(500).json({
            success: false,
            message: errorMessage
        });
    }
});

// Server startup
app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
});