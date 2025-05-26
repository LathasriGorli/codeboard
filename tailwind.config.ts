/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          urbanist: ['Urbanist', 'sans-serif'],
          manrope: ['Manrope', 'sans-serif'],
          dmsans: ['DM Sans', 'sans-serif'],
          nunito: ['Nunito Sans', 'sans-serif'],
        },
      },    
    },
    plugins: [require('tailwindcss-animate')],
  };
  