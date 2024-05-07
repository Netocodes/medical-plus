/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html',
  'node_modules/preline/dist/*.js',],
  darkmode: 'media',
  theme: {
    screens : {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    corePlugins: {
      // Other core plugins...
      gradientColorStops: true, // Ensure this line is present
    },
    extend: {
      backgroundImage: theme => ({
        'herosection-bg': "url('./img/herosection-bg.jpg')",
      }),
      colors: {
        darkGreen: '#315935',
        lightBlue: '#4BC2F1',
        myYellow: '#FFD134'

    },
    },
  },
  plugins: [
    require ('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}


