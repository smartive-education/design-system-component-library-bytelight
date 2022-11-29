/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {},
      fontSize: {
        '5xl': ['48px'],
        '4xl': ['40px'],
        '3xl': ['32px'],
        '2xl': ['24px'],
      },
    },
  },
  plugins: [],
};
