const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',

    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      aspectRatio: {
        portrait: '9/12',
      },
      height: {
        128: 128 * 4,
        156: 156 * 4,
        200: 200 * 4,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: colors.white,
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    ({ addUtilities, addComponents }) => {
      addUtilities({
        '.flex-center': {
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
    },
  ],
};

