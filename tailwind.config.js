module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors : {
      'stone' : '#292524',
      'grey' : '#d6d3d1'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
