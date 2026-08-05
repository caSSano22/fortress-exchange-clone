/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0c0c0c",
        surface: "#111111",
        "surface-2": "#161616",
        "surface-3": "#1e1e1e",
        fg: "#ffffff",
        "fg-soft": "#d1d5db",
        muted: "#888888",
        faint: "#444444",
        ink: "#000000",
        line: "rgba(255, 255, 255, 0.12)",
        "line-soft": "rgba(255, 255, 255, 0.06)",
        gold: "#f59e0b",
        amber: "#d97706",
      },
      fontFamily: {
        sans: ['"Inter"', '"Hanken Grotesk"', 'sans-serif'],
        display: ['"Syne"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        marquee: 'fmarquee 28s linear infinite',
        scan: 'fscan 5s linear infinite',
        cursor: 'fcursor 1s step-end infinite',
      },
      keyframes: {
        fmarquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fscan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fcursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
