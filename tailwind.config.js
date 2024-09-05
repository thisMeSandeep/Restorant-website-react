/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      "orange":"#FEA116",
      "lightorange":"#FEAF39",
      "blue":"#0F172B",
      "gray":"#7A6565",
      "white":"#fff",
      "black":"#000"
    },
    fontFamily:{
      nunito:[ "Nunito", "sans-serif"],
      cursive:["Pacifico", "cursive"]
    },
 
    extend: {
      backgroundImage: {
        'hero-image': "url('./src/assets/bg-Hero.jpg')", // Update the path based on where you place the image
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
    },
  },
  plugins: [],
};
