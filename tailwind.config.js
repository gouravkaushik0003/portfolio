/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#0a0d12',
          subtle: '#0d1117',
          surface: '#12161f',
          elevated: '#161b22',
          overlay: '#1c2128',
        },
        border: {
          subtle: '#21262d',
          default: '#30363d',
          hover: '#484f58',
        },
        fg: {
          DEFAULT: '#f0f6fc',
          muted: '#8b949e',
          subtle: '#6e7681',
          onAccent: '#0a0d12',
        },
        accent: {
          DEFAULT: '#58a6ff',
          muted: '#1f6feb',
          subtle: 'rgba(56, 139, 253, 0.12)',
        },
        success: {
          DEFAULT: '#3fb950',
          subtle: 'rgba(63, 185, 80, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
