/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
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
