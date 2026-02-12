/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './templates/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './blocks/**/*.liquid',
  ],
  theme: {
    extend: {
      colors: {
        'mondrian-red': '#FF0000',
        'mondrian-blue': '#0000FF',
        'mondrian-yellow': '#FFD700',
        'mondrian-black': '#1a1a1a',
        'mondrian-white': '#FAFAFA',
        'mondrian-gray': '#E8E8E8',
      },
      fontFamily: {
        'sans': ['"DM Sans"', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'mono': ['"Space Mono"', 'monospace'],
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
      }
    },
  },
  plugins: [],
}
