/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#9c27b0',
      secondary: '#e91e63',
    },
    extend: {},
  },
  plugins: [],
}
