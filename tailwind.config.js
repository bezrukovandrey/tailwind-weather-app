/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      display: ['group-focus'],
      opacity:['group-focus'],
      inset:['group-focus'],
      colors: {
        navLight: '#DEF5E5',
        firstLight: '#BCEAD5',
        secondLight: '#9ED5C5',
        navDark: '#395B64',
        firstDark: '#2C3333',
        secondDark:'#A5C9CA',
      },
      fontFamily: {
        nav: "'Poiret One', cursive",
        main: "'Montserrat', sans-serif",
      }
    },
  },
  plugins: [],
}
