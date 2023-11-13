/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontSize:{
      sm: '16px',
      base: '18px',
      xl: '22px',
      '2xl': '28px',
      '3xl': '32px',
      '4xl': '36px',
      '5xl': '50px',
      '6xl': '64px',
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    extend: {
      fontFamily: {
        subFont: ["Nunito", "sans-serif"],
        headingFont: ["BigNoodle"],
      },
      colors:{
        primary: "#181818",
        secondary: "#f156ae",
        tertiary: "#802077",
        textMain: "#F2F2F2",
        floatingCont: "#1F1F1F",
        choiceGrad1: "#040405",
        choiceGrad2: "#01120F",
        choiceGrad3: "#02221C",
      },
      backgroundImage:{
        'basketIdle': "url('./src/assets/Web/basketball_idle.png')",
        'basketHover': "url('./src/assets/Web/basketball_hovered.png')",
        'bgPattern': "url('./src/assets/Web/BGcasino.png')",
      },
    },
  },
  plugins: [],
}
