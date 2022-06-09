const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true, // to generate utilities as !important
  content: [
    // Add the paths to all of your template files in your
    "./pages/**/*.{js,ts,tsx,jsx}",
    "./src/components/**/*.{js,ts,tsx,jsx}",
    "./layouts/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // if we want to have custom google fonts
        sans: ["Russo One", ...defaultTheme.fontFamily.sans],
        fancy: ["Dancing Script"],
      },
    },
    colors: {
      // if we want to add custom colors
      ...defaultTheme.colors,
      primary: "#441151",
      secondary: "#ccc",
    },
  },
  plugins: [],
};
