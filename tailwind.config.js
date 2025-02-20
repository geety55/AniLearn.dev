/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1249px",
        playground: "905px",
        input: "600px",
      },
      colors: {
        primary: "#8000FF",
        secondary: "#F8522E",
        button: "#1C1F26",
        "font-clr": "rgba(227, 229, 232, 0.56)",
        "background-clr": "#0D0E12",
        "blur-clr": "rgba(170, 63, 255, 0.07)",
        box: "rgba(18, 20, 24)",
        "mouse-move": "rgba(92, 92, 92, 0.09)",
        "white-low-opacity": "rgba(255, 255, 255, 0.07)",
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
      },
      backgroundImage: {
        "gradient-text": "linear-gradient(270deg, #F8522E, #AA3FFF, #6557FF)",
        "gradient-text-2":
          "radial-gradient(73.51% 119.23% at 50% 49.23%, rgba(227, 229, 232, 0.52) 0%, rgba(227, 229, 232, 0.26) 100%)",
        pattern: `linear-gradient(rgba(13, 14, 18, .3) 2px, transparent 2px), linear-gradient(90deg, rgba(13, 14, 18, .3) 1px, transparent 1px);`,
        "header-image": "url('../assets/header-background.png')",
      },
      boxShadow: {
        "main-button": "0px 1px 17px rgba(170, 63, 255, 0.46)",
        "main-button-hover": "0px 1px 30px 3px rgba(170, 63, 255, 0.46)",
      },
      backgroundSize: {
        pattern: "44px 44px, 44px 44px, 20px 20px, 20px 20px",
      },
      animation: {
        "flag-icon": "flagIcon 1s",
      },
      keyframes: {
        flagIcon: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "20%": {
            transform: "scale(.5) rotate(10deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
