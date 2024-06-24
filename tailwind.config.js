/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class", // or 'media' or 'class
  theme: {
    extend: {
      screens:{

      },
      fontFamily: {
        satoshi: ["Satoshi-Regular", "sans-serif"],
        satoshiBold: ["Satoshi-Bold", "sans-serif"],
      },
      colors: {
        blackPrimary: "#161513",
        blackSecondary: "#1C1C22",
        whitePrimary: "#F0F2F5",
        whiteSecondary: "#FFFFFF",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
