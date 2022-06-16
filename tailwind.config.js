const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,css,twig}",
  ],
  theme: {
    fontFamily: {
      sans: ["'Public Sans'", "sans-serif"],
    },
    screens: {
      'xs': '390px',
      'sm': defaultTheme.screens['sm'],
      'md': defaultTheme.screens['md'],
      'lg': defaultTheme.screens['lg'],
      'narrow': '1194px',
      'xl': defaultTheme.screens['xl'],
      'desktop': '1440px',
      '2xl': defaultTheme.screens['2xl'],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      secondary: '#26874B',
      emphasis: '#F7A341',
      purple: '#8F278D',
      red: '#FF0000',
      blue: {
        100: "#F3F7FA",
        300: "#A8D9FF",
        500: "#5FADE8",
        700: "#075FA2",
        900: "#043459",
      },
      gray: {
        50: "#F8F8F8",
        100: "#EDF1F6",
        300: "#C1CFDE",
        400: "#C1CFDE",
        500: "#92A0AE",
        700: "#44505C",
        900: "#020304",
      }
    },
    extend: {
      boxShadow: {
        'nav-menu': '0px 15px 12px rgba(0, 0, 0, 0.05);'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
