/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        '1.5xl': '1342px',
        '3xl': '2160px'
      }
    },
  },
  plugins: [],
}

