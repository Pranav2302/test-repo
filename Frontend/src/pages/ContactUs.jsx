import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function ContactUs() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    customInquiry: '',
    message: ''
  });
  
  // UI states
  const [showCustomInquiry, setShowCustomInquiry] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle the special case for inquiry type dropdown
    if (name === 'inquiryType') {
      setShowCustomInquiry(value === 'Other');
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing again
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    // Email validation with regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Inquiry type validation
    if (!formData.inquiryType) {
      errors.inquiryType = 'Please select an inquiry type';
    }
    
    // Custom inquiry validation (only if "Other" is selected)
    if (formData.inquiryType === 'Other' && !formData.customInquiry.trim()) {
      errors.customInquiry = 'Please specify your inquiry';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

 // In the handleSubmit function, update the API URL to use environment variables
 const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Validate form
  if (!validateForm()) {
    return;
  }
  
  setIsSubmitting(true);
  setSubmitStatus(null);
  
  // Prepare email content
  const inquirySubject = formData.inquiryType === 'Other' 
    ? formData.customInquiry 
    : formData.inquiryType;
  
  const emailContent = {
    // Send to your email directly instead of using a variable
    to: "pranavkamble0203@gmail.com", // Add your email directly here
    subject: `New Inquiry: ${inquirySubject}`,
    text: `
Name: ${formData.name}
Email: ${formData.email}
Inquiry Type: ${inquirySubject}

Message:
${formData.message}
    `
  };
  
  try {
    // Connect to your backend - ensure this is the correct URL
    const response = await axios.post('http://localhost:5000/sendemail', emailContent);
    
    setSubmitStatus({
      success: true,
      message: 'Your message has been sent! We will contact you shortly.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      inquiryType: '',
      customInquiry: '',
      message: ''
    });
    setShowCustomInquiry(false);
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Get detailed error message from backend if available
    const errorMsg = error.response?.data?.message || 'Failed to send your message. Please try again later.';
    
    setSubmitStatus({
      success: false,
      message: errorMsg
    });
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-spice-primary">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-card border border-spice-border">
          <h2 className="text-2xl font-bold mb-6 text-spice-primary">Get In Touch</h2>
          
          {submitStatus && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-md mb-6 ${
                submitStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-spice-text mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-white border ${
                  formErrors.name ? 'border-red-500' : 'border-spice-border'
                } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-spice-accent text-spice-text`}
                placeholder="Your name"
              />
              {formErrors.name && (
                <p className="text-sm text-red-500 mt-1">{formErrors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-spice-text mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-white border ${
                  formErrors.email ? 'border-red-500' : 'border-spice-border'
                } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-spice-accent text-spice-text`}
                placeholder="you@example.com"
              />
              {formErrors.email && (
                <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium text-spice-text mb-1">
                Inquiry Type <span className="text-red-500">*</span>
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className={`w-full bg-white border ${
                  formErrors.inquiryType ? 'border-red-500' : 'border-spice-border'
                } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-spice-accent text-spice-text`}
              >
                <option value="">-- Select Inquiry Type --</option>
                <option value="Goods Import/Export">Goods Import/Export</option>
                <option value="Spices">Spices</option>
                <option value="Pulses">Pulses</option>
                <option value="Sugar & Jaggery">Sugar & Jaggery</option>
                <option value="Rice & Grains">Rice & Grains</option>
                <option value="Pricing Information">Pricing Information</option>
                <option value="Shipping & Logistics">Shipping & Logistics</option>
                <option value="Other">Other (Specify)</option>
              </select>
              {formErrors.inquiryType && (
                <p className="text-sm text-red-500 mt-1">{formErrors.inquiryType}</p>
              )}
            </div>
            
            {showCustomInquiry && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label htmlFor="customInquiry" className="block text-sm font-medium text-spice-text mb-1">
                  Specify Inquiry <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="customInquiry"
                  name="customInquiry"
                  value={formData.customInquiry}
                  onChange={handleChange}
                  className={`w-full bg-white border ${
                    formErrors.customInquiry ? 'border-red-500' : 'border-spice-border'
                  } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-spice-accent text-spice-text`}
                  placeholder="Specify your inquiry"
                />
                {formErrors.customInquiry && (
                  <p className="text-sm text-red-500 mt-1">{formErrors.customInquiry}</p>
                )}
              </motion.div>
            )}
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-spice-text mb-1">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-white border ${
                  formErrors.message ? 'border-red-500' : 'border-spice-border'
                } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-spice-accent text-spice-text`}
                placeholder="How can we help you?"
              />
              {formErrors.message && (
                <p className="text-sm text-red-500 mt-1">{formErrors.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-3 blue-gradient rounded-md text-white font-medium hover:-translate-y-1 transition-all duration-200 shadow-blue-glow disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-card border border-spice-border">
          <h2 className="text-2xl font-bold mb-6 text-spice-primary">Contact Information</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-spice-dark mb-2">Our Location</h3>
              <p className="text-spice-text">
                123 Business Avenue, <br />
                Suite 456, <br />
                Mumbai, Maharashtra 400001, <br />
                India
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-spice-dark mb-2">Email Us</h3>
              <a href="mailto:info@briskwell.com" className="text-spice-primary hover:text-spice-secondary transition-colors">
                info@briskwell.com
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-spice-dark mb-2">Call Us</h3>
              <a href="tel:+911234567890" className="text-spice-primary hover:text-spice-secondary transition-colors">
                +91 123 456 7890
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-spice-dark mb-2">Business Hours</h3>
              <p className="text-spice-text">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-spice-dark mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-spice-primary hover:text-spice-secondary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-spice-primary hover:text-spice-secondary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-spice-primary hover:text-spice-secondary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858-.182-.466-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-spice-primary hover:text-spice-secondary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}