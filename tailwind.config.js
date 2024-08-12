/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-outer-container": "#04247C",
        "custom-inner-container": "#5476de",
      },
    },
  },
  plugins: [],
};
