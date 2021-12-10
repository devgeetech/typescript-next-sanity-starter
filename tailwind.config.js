const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
      gray: colors.gray,
    },
    fontFamily: {
      primary: [],
      secondary: [],
      heading: [],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
