module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   theme: {
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [require("daisyui"), require('tailwindcss-animated')],
   daisyui: {
    themes: [
      {
        holaluz: {
          "primary": "#e72480",
          "secondary": "#fcda23",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
 }

