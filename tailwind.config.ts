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
      gridTemplateColumns: {
        "respond-sm": "repeat(auto-fit, minmax(170px, 1fr))",
        "respond": "repeat(auto-fit, minmax(245px, 1fr))"
      },
      screens: {
        "min-h": { raw: "(min-height: 768px)" }
      },
      colors: {
        "standard-purple": "#282147",
        "standard-purple-dark": "#1F1A37"
      }
    },
    data: {
      "active": "active~=true"
    }
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
};
export default config;
