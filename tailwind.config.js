/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "650px",
      md: "960px",
      lg: "1280px",
      xl: "1440px",
    },
    fontSize: {
      sm: '0.87rem',
      base: '1.1rem',
      xl: '1.4rem',
      '2xl': '1.7rem',
      '3xl': '2rem',
    },
    colors: {
      base: "#E5E5E5",
      primary: "#00DEA3",
      secondary: "#121626",
      warning: "#FF9500",
      error: "#FF2D55",
      "error-ground": "#5A0314",
      success: "#34C759",
      "success-ground": "#009927",
      white: "#FFFF",
      black: "#000000",
      gray: "#737375",
      "gray-light": "#DADADA",
      "gray-dark": "#232323",
      blue: "#007AFF",
      purple: "#AF52DE",
      orange: "#F45928",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui", "sans-serif"]
    },
  },
  plugins: [],
}

