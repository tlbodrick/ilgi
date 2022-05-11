module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: '#B1BCA0',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        pastel: {
          ...require("daisyui/src/colors/themes")["[data-theme=pastel]"],
          accent: "#B1BCA0",
        },
      },
    ],
  },
}
