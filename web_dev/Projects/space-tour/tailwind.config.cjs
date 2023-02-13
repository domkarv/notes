/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    backgroundImage: {
      "home-mobile": "url('./src/assets/home/background-home-mobile.jpg')",
      "home-tablet": "url('./src/assets/home/background-home-tablet.jpg')",
      "home-desktop": "url('./src/assets/home/background-home-desktop.jpg')",
    },
    fontFamily: {
      barlow: ["Barlow Condensed", "sans-serif"],
      bellefair: ["Bellefair", "serif"],
    },
  },
  plugins: [],
};
