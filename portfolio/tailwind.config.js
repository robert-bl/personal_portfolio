/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sneksnak': "url('/src/assets/sneksnack-scale.png')",
        'bhere': "url('/src/assets/bhere-scale.png')",
        'myplates': "url('/src/assets/myplates-scale.png')",
        'pakrat': "url('/src/assets/pakrat-scale.png')",
        'prof': "url('/src/assets/prof.png')"
      },
      colors: {
        // //font
        // c1: "#FFFFFF",
        // //card
        // c2: "#A8C7E1",
        // c3: "#8CA19D",
        // //grad start
        // c4: "#9CADBC",
        // //header
        // c5: "#2F4858",
        // //border
        // c6: "#002114"

                //font
                c1: "#FFF6E7",
                //card
                c2: "#FFFFFF",
                //background
                c3: "#BDC7DA",
                //highight
                c4: "#6F7788",
                //header
                c5: "#365984",
                //border
                c6: "#365984"

      },
      fontFamily: {
        serif: ['Roboto', 'sans-serif'],
        sans: ['Titillium Web', 'sans-serif']
      }
    },
  },
  plugins: [],
}
