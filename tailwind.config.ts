import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          darkGreen: "#1B5E20",
          midGreen: "#00838F",
          leafGreen: "#4CAF50",
          cream: "#FFF8E1",
          sand: "#F5F0E8",
          dark: "#1A1A1A",
          muted: "#5A6B5D",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 36px -20px rgba(27, 94, 32, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
