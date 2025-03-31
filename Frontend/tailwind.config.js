/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          gradient1: '#0F172A',  // Deep blue
          gradient2: '#1E1B4B',  // Indigo
          gradient3: '#4C1D95',  // Purple
          background: '#0D1117',  // GitHub Dark Background
          card: '#161B22',        // Card Background
          text: '#C9D1D9',        // Light Gray Text
          accent: '#58A6FF',      // Soft Blue Accent
          border: '#30363D',      // Border Color
          button: '#238636',      // Green Button
        },
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        mono: ["'Cascadia Code'", "monospace"],
      },
      animation: {
        gradient: 'gradient 5s ease infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      maxHeight: {
        'dynamic': 'calc(100vh - 16rem)',
      },
      minHeight: {
        'card': '200px',
      },
      fontSize: {
        'input': '1.125rem',
      },
    },
  },
  plugins: [],
};
