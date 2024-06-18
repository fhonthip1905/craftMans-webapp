/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '200': '2.0', 
        '180': '1.8', 
        '160': '1.6', 
        '130': '1.3', 
        // เพิ่มค่านี้
      }
    },
  },
  plugins: [],
}