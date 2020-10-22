module.exports = {
  purge: [],
  theme: {
    extend: {
     
      colors: {
        primary: 'linear-gradient(120deg, rgba(1, 1, 128, 0.7) 0%, rgba(35, 35, 149, 0.7) 100%)',
        secondary: {
          100:'yellow',
          200: 'rgba(230, 230, 34, 0.8)',
          300: '#888883',
        }
      },
     fontFamily: {
       body:['Comfortaa']
     }
    }
    
    
  },
  variants: {
    // textColor: ['responsive', 'hover', 'focus', 'group-focus'];
  },
  plugins: []
}
