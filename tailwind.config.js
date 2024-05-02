/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens : {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundImage: {
        'login-bg': "url('/img/login-bg.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        darkGreen: '#315935',
        lightBlue: '#4BC2F1',
        myYellow: '#FFD134'

    },
    },
  },
  plugins: [
    require ('@tailwindcss/forms'),
  ],
}


