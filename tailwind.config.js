/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "azul": "#62C0C0",
        "l-Abobora": "#FF6600",
        "l-pessego": "#FEEAC2",
        "branco": "#FFFAF0",
        "azul-escuro": "#003B5D",
      },
      backgroundImage: {
        fundo: "url('/src/assets/onda.svg')",
      },
    },
    corePlugins: {
      preflight: false,
    },
  },
  plugins: [],
};
