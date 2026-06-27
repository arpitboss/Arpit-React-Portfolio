export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FFFFFF',
          subtle: '#F9FAFB',
          hover: '#F3F4F6',
        },
        heading: '#374151',
        body: '#6B7280',
        muted: '#9CA3AF',
        faint: '#D1D5DB',
        border: '#E5E7EB',
        accent: '#FFD9AD',
        // Dark mode equivalents (used via CSS variables)
        'dark-bg': {
          DEFAULT: '#0F1117',
          subtle: '#181B25',
          hover: '#1E2130',
        },
        'dark-heading': '#F1F3F8',
        'dark-body': '#A1A8B8',
        'dark-muted': '#6B7280',
        'dark-faint': '#374151',
        'dark-border': '#252836',
        'dark-accent': '#FFD9AD',
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        handwrite: ['Caveat', 'cursive'],
      },
      maxWidth: {
        prose: '680px',
        wide: '960px',
      },
      fontSize: {
        'h1': ['clamp(40px, 5vw, 64px)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h2': ['clamp(28px, 3.5vw, 40px)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['clamp(20px, 2.5vw, 28px)', { lineHeight: '1.3' }],
      },
      keyframes: {
        "cell-ripple": {
          "0%":   { opacity: "0.5", backgroundColor: "var(--cell-bg, transparent)" },
          "50%":  { opacity: "0.7", backgroundColor: "var(--ripple-bg, var(--cell-bg, transparent))" },
          "100%": { opacity: "0.5", backgroundColor: "var(--cell-bg, transparent)" },
        },
      },
      animation: {
        "cell-ripple": "cell-ripple var(--duration, 200ms) ease-out var(--delay, 0ms) 1",
      },
    },
  },
  plugins: [],
}