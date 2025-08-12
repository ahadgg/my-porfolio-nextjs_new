import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        navy: {
          400: "#0a192f",
        },
        "light-navy": {
          400: "#112240",
        },
        "lightest-navy": {
          400: "#233554",
        },
        slate: {
          400: "#8892b0",
        },
        "light-slate": {
          400: "#a8b2d1",
        },
        "lightest-slate": {
          400: "#ccd6f6",
        },
        white: {
          400: "#e6f1ff",
        },
        green: {
          400: "#64ffda",
        },
      },
    },
  },
  plugins: [],
};
export default config;
