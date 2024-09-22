/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_orange: "#DF5E00",
        primary_orange_light: "#FFF4ED",
        primary_black: "#303030",
      },
      fontFamily: {
        pure: "var(--font-pure)",
        inter: "var(--font-inter)",
      },
      backgroundColor: {
        app_primary_gradient: "var(--background)",
        background: "var(--background)",
      },
      boxShadow: {
        tab_box: "0px 0px 4px 4px rgba(224,223,223,0.36)",
      },
      backgroundImage: {
        superbridge_bg: "url('/src/images/8163f28729f6a834164ff.jpg')",
      },
    },
  },
  plugins: [],
};
