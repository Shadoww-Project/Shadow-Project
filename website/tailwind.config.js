const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#68C6C5",
        primary2: "#6F2D8F",
        secondary: "#454F4F",
        secondary2: "#E3E8E8",
        secondary3: "#C2C6C6",
        secondary4: "#3E4747",
      },
    },
  },
  plugins: [],
});
