/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        EB_Garamond: ['EB Garamond', 'serif'],
        Shanti: ['Shanti', 'sans-serif'],
      },
    },
  },
  
  plugins: [require("daisyui")],

    daisyui: {
      themes: ["light", "dark"],
    },
  
}

