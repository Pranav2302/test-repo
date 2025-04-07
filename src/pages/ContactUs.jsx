import React from 'react';

export default function ContactUs() {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-black/40 p-8 rounded-lg border border-cyan-900/50">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Get In Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-black/80 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-black/80 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full bg-black/80 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                placeholder="How can we help you?"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-cyan-700 to-blue-700 rounded-md text-white font-medium hover:-translate-y-1 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="bg-black/40 p-8 rounded-lg border border-cyan-900/50">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Contact Information</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Our Location</h3>
              <p className="text-gray-300">
                123 Business Avenue, <br />
                Suite 456, <br />
                Mumbai, Maharashtra 400001, <br />
                India
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Email Us</h3>
              <a href="mailto:info@briskwell.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                info@briskwell.com
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Call Us</h3>
              <a href="tel:+911234567890" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +91 123 456 7890
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Business Hours</h3>
              <p className="text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}