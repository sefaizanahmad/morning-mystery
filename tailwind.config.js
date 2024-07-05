/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B71CA', // Example primary color
        secondary: 'orange', // Example secondary color
      },
    },
  },
  plugins: [],
};