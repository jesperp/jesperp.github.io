const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.css',
    'public/index.html',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.lightBlue,
      secondary: colors.yellow,
      gray: colors.blueGray,
      white: colors.white,
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      serif: ['serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
