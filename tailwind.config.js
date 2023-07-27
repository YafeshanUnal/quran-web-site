/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html", "./index.html"],
  theme: {
    screens: {
      desktop: { max: "9720px" },
      laptop: { max: "1210px" },
      tablet: { max: "1023px" },
      mobile: { max: "550px" },
      mini: { max: "300px" },
    },
    extend: {
      colors: {
        brand: {
          white: "#FEFEFE",
          black: "#1B1C1E",
          primary: "#2559A6",
          gray: "#929292",
          "secondary-gray": "#666666",
          "secondary-blue": "#326FC8",
          "third-gray": "#EBEBEB",
          green: "#C5D652",
          "success-green": "#74D652",
        },
      },
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        amiri: ["Amiri Quran", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};
