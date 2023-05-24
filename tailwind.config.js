/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.js", "./src/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  content: [],
  theme: {
    colors: {
      "primary-color": "#09234C",
      "secondary-color": "var(--secondary-color)",
      ...colors,
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    displayType: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};

