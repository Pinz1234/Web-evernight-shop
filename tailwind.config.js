module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neonPurple: "#a855f7",
        neonPink: "#ec4899"
      },
      boxShadow: {
        aura: "0 0 40px rgba(168,85,247,0.35)",
        auraPink: "0 0 40px rgba(236,72,153,0.35)"
      }
    }
  },
  plugins: []
};