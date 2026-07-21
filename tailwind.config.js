/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0F14',
          soft: '#0F151C',
          panel: '#121820',
          line: '#24313D',
        },
        fog: {
          DEFAULT: '#E7EDF3',
          muted: '#8DA0B3',
          dim: '#5A6C7C',
        },
        amber: {
          DEFAULT: '#F2A65A',
          soft: '#F7C089',
        },
        teal: {
          DEFAULT: '#4FD1C5',
          soft: '#8FE3DA',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(36,49,61,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(36,49,61,0.55) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scan: 'scan 3s linear infinite',
      },
    },
  },
  plugins: [],
}
