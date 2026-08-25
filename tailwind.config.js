/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8FAFC',
        ink: '#0F172A',
        coral: '#4F46E5',
        teal: '#14B8A6',
        sun: '#FBBF24',
        lilac: '#EDE9FE',
        mint: '#E0F2FE',
        pinkie: '#FFE4E6',
        skyy: '#F1F5F9',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
