/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: "'Raleway', sans-serif",
        signature:"'Great Vibes', cursive"

      },
    },
    
  },
  daisyui: {
    themes: [ "dark"],
    
  },
  plugins: [require("daisyui")],
}

