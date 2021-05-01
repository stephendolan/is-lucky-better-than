module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        lucky: {
          "light-blue": "#274f8c",
          "dark-blue": "#002748",
          green: "#36de97",
          "teal-blue": "#1c92b3",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
