/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "responsive-8xl": "clamp(2rem, 5vw, 6rem)",
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
    require("tailwind-scrollbar-hide"), // revert to using require for CommonJS modules

    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme("translate"), supportsNegativeValues: true }
      );
    }),
  ],
};
export default config;
