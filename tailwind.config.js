const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace"]
      },
      colors: {
        "colors": {
          "skill": "#F7F7FB",
          "yelow": {
            "50": "#FFFDEB",
            "100": "#FEFAD7",
            "200": "#FEF5AA",
            "300": "#FDF181",
            "400": "#FDEC59",
            "500": "#FCE72D",
            "600": "#ECD503",
            "700": "#B09F02",
            "800": "#746802",
            "900": "#3C3601"
          }
        }
      }
    },
  },
  plugins: [
    plugin(function({addUtilities}) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/img/hero.svg)"
        },
        ".shadow-skill":{
          "box-shadow": "0px 15px 30px rgba(0, 0, 0, 0.1)"
        }
      }
      addUtilities(utilities)
    })
  ],
}
