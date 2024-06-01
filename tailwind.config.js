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
        'logo': 'url("../img/Medical-plus-logo.png")'
      },
      textShadow: {
        'default': '0 2px 4px rgba(0, 0, 0, 0.10)',
        'md': '0 3px 6px rgba(0, 0, 0, 0.15)',
        'lg': '0 5px 10px rgba(0, 0, 0, 0.20)',
        'xl': '0 10px 20px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        myBlue: '#4169e1',
        lightBlue: '#4BC2F1',
        myYellow: '#FFD134',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
    require('taos/plugin'),
    
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.10)',
        },
        '.text-shadow-md': {
          'text-shadow': '0 3px 6px rgba(0, 0, 0, 0.15)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 5px 10px rgba(0, 0, 0, 0.20)',
        },
        '.text-shadow-xl': {
          'text-shadow': '0 10px 20px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-none': {
          'text-shadow': 'none',
        },
      }, ['responsive', 'hover']);
    },
  ],
};
