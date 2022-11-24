/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'banner': 'hsl(212, 45%, 89%)',
        'main-card':'hsl(0, 0%, 100%)',
        'section-text-card':'hsl(218, 44%, 22%)',
        'text-code':'hsl(220, 15%, 55%)'
      },
      screens: {
        'xs': '400px',
      },
        fontFamily: {
        'outfit': ['Outfit'],
      }
    },
  },
  plugins: [],
}
