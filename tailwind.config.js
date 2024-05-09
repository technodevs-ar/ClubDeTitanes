/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fefaec',
          '100': '#fbf1ca',
          '200': '#f7e190',
          '300': '#f3cc56',
          '400': '#f0b82f',
          '500': '#ea9e23',
          '600': '#ce7411',
          '700': '#ab5212',
          '800': '#8b4115',
          '900': '#733614',
          '950': '#421a06',
        },
        'secondary': {
          '50': '#f7f7f7',
          '100': '#ededed',
          '200': '#e3e3e3',
          '300': '#c8c8c8',
          '400': '#adadad',
          '500': '#999999',
          '600': '#888888',
          '700': '#7b7b7b',
          '800': '#676767',
          '900': '#545454',
          '950': '#363636',
        },
        fontFamily: {
          'sans': ['Poppins', 'sans-serif'],
        }
      }
    },
  },
  plugins: [],
}

