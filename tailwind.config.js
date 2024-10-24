/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'], 
      },
      colors: {
        myRed: '#d91900',
        myBlue: '#1583ff',
        jobBox: '#36454F',
        jobBoxHover: '#5a6871',
      },
    },
  },
  plugins: [],
}

