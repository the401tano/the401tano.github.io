/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#f97316',
          red: '#ef4444',
          dark: '#0a0a0a',
          card: '#111111',
          border: '#222222',
        },
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse_slow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-up-delay': 'fadeUp 0.6s ease-out 0.15s forwards',
        'fade-up-delay-2': 'fadeUp 0.6s ease-out 0.3s forwards',
        'pulse-slow': 'pulse_slow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
