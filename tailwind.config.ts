import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        "bg-alt": "#FAFAFA",
        ink: "#222222",
        "ink-mid": "#555555",
        "ink-light": "#888888",
        yellow: "#F2FF91",
        orange: "#E26125",
        blue: "#4A6CF7",
        silver: "#BDBCBD",
        grey: "#818081",
        border: "#E2E2E2",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        script: ["var(--font-pinyon)", "cursive"],
        body: ["var(--font-urbanist)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
