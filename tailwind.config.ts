import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-parallax": 'url("../public/images/hero.jpg")',
        "hero-bg": 'url("../public/images/hero-bg-1.jpg")',
        arrowLeft: 'url("../public/images/arrowLeft.svg")',
        arrowRight: 'url("../public/images/arrowRight.svg")',
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
