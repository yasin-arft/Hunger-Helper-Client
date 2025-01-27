/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': 'Nunito, sans-serif'
      },
      colors: {
        blue: {
          light: '#2196F3',
          dark: '#1565C0'
        },
        green: {
          light: '#4CAF50 ',
          dark: '#388E3C'
        },
        orange: {
          light: '#FF9800',
          dark: '#F57C00'
        },
        dark: '#191919'
      }
    },
  },
  plugins: [require('daisyui'),],
}

