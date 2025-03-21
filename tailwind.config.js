export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#0070f3",
          dark: "#60a5fa"
        },
        secondary: "#6c757d",
        dark: {
          DEFAULT: "#121212",
          800: "#1e1e1e",
          700: "#2d2d2d",
          600: "#383838",
        },
        light: {
          DEFAULT: "#f8f9fa",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],

      },
      animation: {
        'cursor-blink': 'cursor 1s infinite step-end',
      },
      keyframes: {
        cursor: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}