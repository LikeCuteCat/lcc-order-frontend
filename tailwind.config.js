/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['cupcake'],
  },
  plugins: [
    require('daisyui'),
    function ({ addComponents }) {
      addComponents({
        '.btn': {
          borderRadius: '.25rem',
          padding: 0,
        },
      });
    },
  ],
};
