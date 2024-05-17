/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
       roboto:{
          light: ['Roboto_300Light'],
          regular: ['Roboto_400Regular'],
          medium: ['Roboto_500Medium'],
       },
       ubuntu:{
         bold: ['Ubuntu_700Bold'],
       }
      },
      colors: {
        primary: '#34CB79',
        primaryDark: '#2FB86E',
        secondary: '#E1FAEC',
        heading: '#322153',
        text: '#6C6C80',
        body: '#A0A0B2',
        block: '#FFFFFF',
        background: '#F0F0F5',
      }
    },
  },
  plugins: [],
};