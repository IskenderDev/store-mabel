/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B35D6C', 
          light: '#F3CADB',  
          dark: '#8C3A46',    
        },
        background: '#FFF8F3', 
      },
      textColor: {
        primary: '#B35D6C', 
      },
    },
  },
  plugins: [],
};
