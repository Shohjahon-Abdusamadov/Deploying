/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 8px 15px 0px #8540F540',
      },
      borderRadius: {
        'custom': '5.92px 0px 0px 5.92px',
      },
      borderRadius: {
        'custom2': '0px 5.92px 5.92px 0px',
      },
    },
  },
  plugins: [],
}
