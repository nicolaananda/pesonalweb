/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["DM Serif Display", "serif"],
      },
      colors: {
        spotify: "#10893F", // This is the official Spotify color.
      },
    },
  },
  plugins: [],
};
//  colors: {
//       transparent: "transparent",
//       current: "currentColor",
//       white: "#ffffff",
//       purple: "#3f3cbb",
//       midnight: "#121063",
//       metal: "#565584",
//       tahiti: "#3ab7bf",
//       silver: "#ecebff",
//       bermuda: "#78dcca",
//       t1: "#03045e",
//       t2: "#0077b6",
//       t3: "#00b4d8",
//       t4: "#90e0ef",
//       t5: "#caf0f8",
//     },
