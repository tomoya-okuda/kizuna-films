/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        Yellow100: '#e4d124',
        Green100: '#b0d78a',
        White100: '#fff',
        Black100: '#1a1a1a',
        Beige100: '#fbf4ed',
      },
    },
  },
  plugins: [],
};
