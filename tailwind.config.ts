import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        "0": "0ms",
        "2000": "2000ms",
      },
      transitionTimingFunction: {
        "ease-out": "ease-out",
      },
      backgroundImage: {
        hero: "url('/images/home-9.png')",
        award: "url('/images/about-22.png')",
      },
      colors: {
        pink: "#e90e70",
        grey: "#080914",
      },
    },
  },

  variants: {
    extend: {
      maxHeight: ["hover", "focus"],
    },
  },
  plugins: [],
};
export default config;
