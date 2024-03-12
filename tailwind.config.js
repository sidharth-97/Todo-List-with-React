/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Lblack: "#1F1E1B",
        Dblack:"#1B1A17",
        txtclr: "#F0E3CA",
        markh: "#FF8303",
        mark:"#A35709"
      }
    },
  },
  plugins: [],
}