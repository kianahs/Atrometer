module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#2E7EFA',
     }) ,
    borderWidth: {
     '3': '3px',
    },
 
    borderColor: theme => ({
      ...theme('colors'),
      'primary': '#2E7EFA',
      'secondary': '#E94927',
     }),
     fontSize: {
      'base': '1.5rem',
     },
    extend: {
      backgroundImage: theme => ({
        'header1-image': "url( 'photos/header1.png')",
        
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}