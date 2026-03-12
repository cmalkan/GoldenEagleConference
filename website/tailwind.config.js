/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        summit: {
          gold: "#f7b500",
          dark: "#081320",
          slate: "#13263a"
        }
      }
    },
  },
  plugins: [],
};
