const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        bgOpacity: 'bg-solid-opacity 1000ms linear forwards',
      },
      keyframes: {
        'bg-solid-opacity': {
          to: {
            backgroundColor: '#43435300',
          },
        },
      },
    },
    screens: {
      sm: '425px',
      // => @media (min-width: 425px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1920px',
    },
  },
  plugins: [require('tailwindcss-animate')],
};
