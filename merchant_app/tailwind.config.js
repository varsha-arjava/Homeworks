module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans all components
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        "light-blue": "#3498db",
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
};


