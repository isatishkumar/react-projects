/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primarySea":"#495E57",
        "primaryYellow":"#F4CE14",
        "secondaryOrange":"#EE9971",
        "secondaryBeige":"#BDABB",
        "highlightWhite":"#EDEFEE",
        "highlightBlack":"#333333",
      }
    },
  },
  plugins: [],
}

