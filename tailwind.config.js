module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,tsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode:"media", /* media : 시스템 설정, class : 사용자 설정 */
  plugins: [require("@tailwindcss/forms")],
}
