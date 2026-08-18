/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/renderer/index.html",
    "./src/renderer/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Andante', 'sans-serif'],
      },
      colors: {
        darkBg: '#050505',
        darkCard: '#111111',
        brand: '#FFD700'
      }
    },
  },
  plugins: [],
}