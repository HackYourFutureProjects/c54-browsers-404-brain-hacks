/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './public/*.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-green': '#B0FF8B',
        'custom-green-dark': '#46DB00',
      },
    },
  },
  plugins: [],
};
