/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        trianglz: "#244A71",
        tealgreen: "#13BF8E",
      },
      fontFamily: {
        opensans: ["Open Sans"],
        garamond: ["EB Garamond"],
      },
    },
  },
  plugins: [],
};
