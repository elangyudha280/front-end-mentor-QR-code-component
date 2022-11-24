/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'bg-banner': 'hsl(212, 45%, 89%)',
        'bg-card':'hsl(0, 0%, 100%)',
        'color-text-card':'hsl(218, 44%, 22%)',
        'bg-code':'hsl(220, 15%, 55%)'
      },
    },
  },
  plugins: [],
}
