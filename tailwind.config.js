/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#333333", light: "#B0B0B0", dark: "#111111" },
        secondary: { DEFAULT: "#F4F4F4", light: "#E0E0E0", dark: "#D0D0D0" },
        accent: "#888888",
        background: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

