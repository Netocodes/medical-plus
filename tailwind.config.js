/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./*.html', 'node_modules/preline/dist/*.js', './src/*.{html,js}'],
  },
  darkMode: 'media', // Corrected darkMode property
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      serif: ['"Inter"', 'serif'], // Corrected font family syntax
    },
    corePlugins: {
      gradientColorStops: true, // Ensure this line is present
    },
    experimental: {
      applyComplexClasses: true, // Enable dynamic utility classes
    },
    extend: {
      backgroundImage: {
        'parallax': 'url("../img/herosection-bg.jpg")',
      },
      colors: {
        darkGreen: '#315935',
        lightBlue: '#4BC2F1',
        myYellow: '#FFD134',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
    require('taos/plugin'),
  ],
};
