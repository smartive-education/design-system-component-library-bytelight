/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      fontSize: {
        '5xl': ['48px'],
        '4xl': ['40px'],
        '3xl': ['32px'],
        '2xl': ['24px'],
        xs: ['14px'],
      },
    },
  },
  plugins: [],
};
