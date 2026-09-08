import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          500: "#3b5bfd",
          600: "#2c46e0",
          700: "#2536b0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
