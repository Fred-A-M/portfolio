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
        fira: ['"Fira Code"', 'monospace'],
      },
      colors: {
        myRed: '#d91900',
        myBlue: '#1583ff',
        jobBox: '#36454F',
        jobBoxHover: '#5a6871',
      },
      animation: {
        blink: 'blink 1s step-start infinite'
      },
      keyframes: {
        blink: {
          '50%': { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
}

