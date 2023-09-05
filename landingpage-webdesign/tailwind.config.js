/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#4ABC69",
        background : "#f5f5f5",
        backgroundSecondary : "#f0f0f0",
        whiteCustom : "#f5f5f5",
        footer: "#0E1B21",
      }
    },
    fontFamily: {
      "primary" : ["Montserrat Alternates","sans-serif"],
    }
  },
  plugins: [],
}