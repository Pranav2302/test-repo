export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'spice-primary': '#0066cc', // Deep blue primary
          'spice-secondary': '#2d8efd', // Lighter blue accent
          'spice-accent': '#0099ff', // Bright blue for highlights
          'spice-light': '#ffffff', // Pure white background
          'spice-lighter': '#f8fafc', // Very light blue-gray
          'spice-dark': '#1e3a5f', // Dark blue text
          'spice-text': '#334155', // Slate text
          'spice-border': '#e2e8f0', // Light gray border
          'spice-glass': 'rgba(255, 255, 255, 0.9)', // Glass effect
        },
        fontFamily: {
          'display': ['Montserrat', 'sans-serif'],
          'body': ['Inter', 'sans-serif'],
        },
        boxShadow: {
          'glossy': '0 10px 30px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 102, 204, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.7) inset',
          'glossy-hover': '0 14px 40px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0, 102, 204, 0.2), 0 1px 0 0 rgba(255, 255, 255, 0.7) inset',
          'card': '0 4px 20px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(226, 232, 240, 0.5)',
          'blue-glow': '0 5px 15px rgba(45, 142, 253, 0.4)',
        },
        animation: {
          'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        },
        keyframes: {
          ping: {
            '0%': { transform: 'scale(1)', opacity: '0.8' },
            '80%, 100%': { transform: 'scale(1.5)', opacity: '0' },
          },
        },
      },
    },
    plugins: [],
  }