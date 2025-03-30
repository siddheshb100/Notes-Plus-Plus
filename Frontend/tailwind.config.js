/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
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
      },
    },
  },
  plugins: [],
};
