import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        gray: {
          100: "#e5e5e5",
          400: "#a3a3a3",
          700: "#404040"
        }
      }
    }
  },
  plugins: []
};

export default config;
