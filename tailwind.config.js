/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: '#D0F6FF',
      secondarycolorwhite:'#FFFFFF',
      secondarycolorblue:'#21B7E2',
      fontinclude:'#A9A9AA',
    },extend:{
      fontFamily:{
        'primary': ['Grandstander', 'sans-serif']
      }
    }
  },
  plugins: [],
}

