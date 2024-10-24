/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'responsive-8xl': 'clamp(2rem, 5vw, 6rem)',
      },
      colors: {
        base: "#151515",
        "base-2": "#1D1D1D",
        primary: "#fc2846",
        text: "#f2e8de",
      },
      fontFamily: {
        clash: "var(--font-clash-display)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide") // revert to using require for CommonJS modules
  ],
};
export default config;
