/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A437DB",
        secondary: "#bb84e8",
        dark: {
          hard: "#0D2436",
          soft: "#183856",
        },
      },
      fontFamily: {
        SpaceMono: ["Space Mono", "monospace"],
        Recursive: ["Recursive", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        DM_Sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
