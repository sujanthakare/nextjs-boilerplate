module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundColor: (theme) => {
      return {
        ...theme.colors,
        primary: {
          700: "#196EBF",
          800: "#0078d4",
        },
      };
    },
  },
  plugins: [],
};
