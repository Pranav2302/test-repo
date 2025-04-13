
const config = {
  // API Configuration
  api: {
    url: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  },
  
  // Business Information
  business: {
    name: 'Briskwell International',
    email: 'info@briskwell.com',
    phone: '+91-123-456-7890',
    address: {
      street: '123 Business Avenue', 
      area: 'Industrial Area',
      city: 'Mumbai',
      country: 'India',
      postalCode: '400001'
    }
  },
  
  // Social Media Links
  social: {
    facebook: import.meta.env.VITE_SOCIAL_FACEBOOK || '#',
    twitter: import.meta.env.VITE_SOCIAL_TWITTER || '#',
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || '#',
    linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN || '#'
  }
};

export default config;