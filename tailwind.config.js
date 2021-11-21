module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      cursor: {
        grab: "grabbing",
      },
      fontFamily: {
        "dm-sans": ["DMSans", "sans-serif"],
      },
      colors: {
        background: "#0D1118",
        body: "#777F93",
        primary: "#7230FF",
        "primary-dark": "#4800e3",
        "primary-darker": "#300096",
        input: "#767F93",
        mockup: "#6A7183",

        "slate-light": "#F9F9F9", // theme: slate, background color
        "slate-orange": "#FF5930", // theme: slate, primary orange
        "slate-headline": "#1C202B", // theme: slate, headline color
        "slate-body": "#2C3242", // theme: slate, body text color
        "slate-blue": "rgba(67, 83, 255, 1)", // theme: slate, primary blue
        "feeling-moody-start": "#E1ECF6", // theme: slate, start of gradient
        "feeling-moody-end": "#F0E3E3", // theme: slate, end of gradient
        "slate-border": "rgba(25, 49, 60, 0.1)", // theme: slate, end of the border
      },
      boxShadow: {
        slight: "0px 13px 19px 8px #C8DDE53B",
      },
      fontSize: {
        "desktop-h1": "48px;",
        "desktop-h2": "42px",
        "desktop-subheading": "21px",
        "desktop-h4": "20px",
        "desktop-paragraph": "18px",
        "mobile-h2": "32px",
        "mobile-h1": "38px",
        "mobile-h3": "26px",
      },
      maxWidth: {
        default: "1146px",
      },
      padding: {
        mob: "24px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
      ringWidth: ["active", "focus-visible"],
      ringColor: ["active", "focus-visible"],
      opacity: ["disabled"],
      cursor: ["disabled"],
      borderWidth: ["last"],
    },
  },
  plugins: [],
};
