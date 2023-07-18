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
        btn_bg: "#252525",
        primaryColor: "#ad6546",
      },
    },
  },
  plugins: [],
};
