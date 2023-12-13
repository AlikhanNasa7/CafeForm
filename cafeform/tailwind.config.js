/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.hmtl",
            "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'royalblue':'#00539C',
        'peach': '#EEA47F'
      }
    },
  },
  plugins: [],
}

