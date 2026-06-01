import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#F4EFE6",
          warm: "#ECE4D2",
        },
        paper: "#FBF7EE",
        green: {
          DEFAULT: "#1F6B3A",
          deep: "#154A28",
          soft: "#B7CFA8",
        },
        pink: {
          DEFAULT: "#FF6FA8",
          hot: "#FF4D8D",
          soft: "#FFD0E0",
        },
        ink: {
          DEFAULT: "#141414",
          soft: "#4A4742",
          line: "#1F1F1F",
        },
      },
      fontFamily: {
        sans: [
          "SUIT Variable",
          "SUIT",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "sans-serif",
        ],
      },
      maxWidth: {
        page: "1440px",
      },
      keyframes: {
        bobble: {
          "0%, 100%": {
            transform: "translateY(0) rotate(var(--r, 0deg))",
          },
          "50%": {
            transform: "translateY(-8px) rotate(calc(var(--r, 0deg) + 4deg))",
          },
        },
      },
      animation: {
        bobble: "bobble 4s ease-in-out infinite",
        "bobble-slow": "bobble 6s ease-in-out infinite",
        "bobble-fast": "bobble 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
