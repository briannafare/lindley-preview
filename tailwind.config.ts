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
        "bg-alt": "#F5F5F0",
        ink: "#222222",
        "ink-mid": "#555555",
        "ink-light": "#888888",
        yellow: "#F2FF91",
        orange: "#E26125",
        blue: "#3554D9",
        silver: "#BDBCBD",
        grey: "#818081",
        border: "#E2E2E2",
        cream: "#F5F1EC",
      },
      fontFamily: {
        display: ["var(--font-dm-sans)", "sans-serif"],
        script: ["var(--font-pinyon)", "cursive"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
