/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      container: {
        screens: {
          xl: "1500px"
        },
        center: true,
        padding: 20
      },
      fontFamily: {
        Bigilla: "Bigilla"
      },
      fontSize: {
        "4xl": "clamp(56px,9cqw,148px)",
        "3xl": "clamp(48px,9cqw,144px)",
        "2xl": "clamp(60px,9cqw,90px)",
        lg: "clamp(16px,3cqw,28px)",
        medium: "clamp(14px,3cqw,24px)"
      },
      lineHeight: {
        custom: "clamp(70px,10cqw,160px)"
      },
      colors: {
        "pale-gray": "#ffffffb4",
        pink: "#CBABE8"
      },

      screens: {
        mobile: { max: "500px" },
        tablet: { max: "890px" }
      },
    },
  },
  plugins: []
};
