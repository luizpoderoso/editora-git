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
        fadeInModal: "modalIn ease-in-out 2s"
      },

      keyframes: theme => ({
        backgroundIn: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: theme('colors.black') }
        },
        modalIn: {
          '0%': { width: '0px', height: '0px', color: theme('colors.transparent') },
          '20%': { width: '0px', height: '0px', color: theme('colors.transparent') },
          '50%': { width: '750px', height: '600px', color: theme('colors.transparent') },
          '100%': { color: theme('colors.zinc.500') }
        }
      })

    },
  },
  plugins: [],
}

