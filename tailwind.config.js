/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {

      screens: {
        '1.5xl': '1342px',
        '3xl': '2160px'
      },

      animation: {
        fadeInBackground: "backgroundIn ease-in-out 0.4s",
        fadeInModal: "modalIn ease-in-out 2s",
        fadeInInput: "inputIn ease-in-out 2s",
        fadeInButton: "buttonIn ease-in-out 2s"
      },

      keyframes: theme => ({
        backgroundIn: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: theme('colors.black') }
        },
        modalIn: {
          '0%': { width: '0px', height: '0px', color: theme('colors.transparent') },
          '10%': { width: '0px', height: '0px', color: theme('colors.transparent') },
          '50%': { width: '750px', height: '600px', color: theme('colors.transparent') },
          '100%': { color: theme('colors.zinc.500') }
        },
        inputIn: {
          '0%': { width: '0px', 'padding-left': "0px", 'padding-right': "0px", color: theme('colors.transparent') },
          '10%': { width: '0px', 'padding-left': "0px", 'padding-right': "0px", color: theme('colors.transparent') },
          '50%': { width: '0px', 'padding-left': "0px", 'padding-right': "0px", color: theme('colors.transparent') },
          '100%': { width: '100%', height: '38px', backgroundColor: theme('colors.zinc.800') }
        },
      })

    },
  },
  plugins: [],
}

