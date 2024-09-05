// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Updated for the app directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3d52a0",
        secondary: "#7091e6",
        accent: "#8697c4",
        light: "#adbbda",
        background: "#ede8f5",
      },
    },
  },
  plugins: [],
};
