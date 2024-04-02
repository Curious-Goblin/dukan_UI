/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        blue:{
          700:"#146eb4",
          600:"#0e4f82",
          100:"#aacbe4",
          200:"#97bfde",
          500:"#202444"
        },
        darkBlue:{
          
        }
      }
    },
  },
  plugins: [],
}