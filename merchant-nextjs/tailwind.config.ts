import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        "light-blue": "#2a88c8",
        "light-white": "rgba(255,255,255,0.17)",
        "dark-blue": "#00365d",
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-heavy': '0 10px 20px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config;
