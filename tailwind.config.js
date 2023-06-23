/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{html,jsx,js}",
    "./index.html",
    "./src/**/*.{html,js}",
    "./src/components/**/*.{html,jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        transparent: "transparent",
        current: "currentColor",
        black: "#000000",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
    },
  },
  plugins: [],
};
