const defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
  mode: "jit",
  purge: ["index.html", "src/**/*.jsx"],
  theme: {
    fontFamily: {
      sans: ["Inter var", defaultConfig.theme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          light: "#5f6c80",
          accent: "#f1fbda",
          dark: "#100827",
        },
      },
      backgroundColor: {
        dark: {
          primary: "#100827",
          secondary: "#363c48",
          accent: "#4299e1",
        },
        light: {
          primary: "#fff",
          secondary: "#edf2f7",
        },
      },
      textColor: {
        dark: {
          primary: "#f1fbda",
          secondary: "#e2e8f0",
          accent: "#81e6d9",
          tertiary: "#a0aec0",
        },
        light: {
          primary: "#2d3748",
          secondary: "#4a5568",
          accent: "#2b6cb0",
          tertiary: "#4a5568",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
  corePlugins: {
    outline: false,
  },
};
