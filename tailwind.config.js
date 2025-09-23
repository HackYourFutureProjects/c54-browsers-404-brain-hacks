/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./public/*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}