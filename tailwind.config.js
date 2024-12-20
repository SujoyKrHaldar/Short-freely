export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "small-mobile": "428px", //xs
      mobile: "640px", //sm
      tablet: "768px", //md
      laptop: "1024px", //lg
      desktop: "1280px", //xl
      "large-screen": "1536px", //2xl
    },
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        tablet: "2rem",
        laptop: "4rem",
        desktop: "7rem",
      },
    },
  },
  plugins: [],
};
