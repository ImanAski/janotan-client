/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{html,jsx,js}",
    "./index.html",
    "./src/**/*.{html,js, jsx}",
    "./src/components/**/*.{html,jsx,js}",
    "./src/features/**/*.{html,jsx,js}",
  ],

  theme: {
    extend: {
      colors: {
        btn_bg: "#252525",
        primaryColor: "#ad6546",
      },
    },
  },
  plugins: [],
};
