/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightblue: "#2F8AE7",
        midblue: "#387EE1",
        darkblue: "#436FD9",
        grayishBlue: "#F4F8FC",
        shadowblue: "#EFF5FB",
        // check shadowgreen across board
        shadowgreen: "#E5F6F5",
        greycolor: "#4F606A",
        whitishblue: "#E8EEF4",
        bordergrey: "#ebebeb",
        sharpblue: "#535bf2",
      },
      fontFamily: {
        heleveth: "HelveticaNowMTTextRegular, Helvetica, Arial, sans-serif",
      },
    },
  },
  plugins: [],
};
