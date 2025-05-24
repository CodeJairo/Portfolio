/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
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
  plugins: [],
};
