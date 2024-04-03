/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/preline/dist/*.js',
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'html' : '#E34F26',
        'css' : '#1572B6',
        'js' : '#F7DF1E',
        'tw' : '#06B6D4',
        'vue' : '#4FC08D',
        'php' : '#777BB4',
        'mariadb' : '#003545',
        'go' : '#00ADD8'
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
  darkMode: "class"
}