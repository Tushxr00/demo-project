/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "break-1": "1375px",
    },
    extend: {
      colors: {
        primary: {
          1: "#EDF6FF",
          2: "#303F60",
          3: "#1A253C",
          4: "#43AFFF",
          5: "#43AFFF33",
          6: "#4D618E",
          7: "#557DA526",
          8: "#FF0000",
          9: "#FF333380",
          10: "#A9AFBC",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
