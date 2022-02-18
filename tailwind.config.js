module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors : {
      //this is for the dark background and the text
      'stone' : '#292524',
      'grey' : '#d6d3d1',
      //This is the backgroun color
      'back' : '#FAFAF9',
      //This is the main color
      'main' : '#EF4444',
       'main-light' : '#FEE2E2',
      //This is for light text
      'light' : '#78716C',
      'white' : '#ffffff',
      'form' : '#F5F5F4',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
