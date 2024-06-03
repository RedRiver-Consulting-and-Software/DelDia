/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        iris: "#9068FF",
        royalBlue: "#5c79ed",
        skyBlue: "#26D8F0",
        lightGray: "#F3F4F6",
        dimGray: "#606060",
        darkGray: "#232323",
      },
      fontFamily: {
        Monserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
