/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#334155',
        dark: '#0F172A',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
