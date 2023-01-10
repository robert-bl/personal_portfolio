/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sneksnak': "url('/src/assets/sneksnak.png')",
        'bhere': "url('/src/assets/bhere.png')",
        'pakrat': "url('/src/assets/pakrat.png')",
        'prof': "url('/src/assets/prof.png')"
      },
      colors: {
        drkgry: "#2B2E2A",
        medgry: "#3F4A3C",
        drkblu: "#2E465A",
        medblu: "#5E768C",
        lit: "#A3AF9F"
      }
    },
  },
  plugins: [],
}
