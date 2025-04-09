import axios from 'axios';

// Create an axios instance with default config
const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Email service
export const emailService = {
  sendContactEmail: (emailData) => {
    return api.post('/sendemail', emailData);
  }
};

export default api;