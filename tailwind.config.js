/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      "oxford-blue": "#0B063C",
      "dark-green-light": "#41C5FB",
      "dark-green": "#8B44FF",
      moonstone: "#8B44FF",
    },
    keyframes: {
      "click-bounce": {
        "0%": { scale: "1" },
        "50%": { scale: "0.8" },
        "100%": { scale: "1" },
      },
    },
    animation: {
      "click-bounce": "click-bounce 0.3s ease-in-out",
    },
    translate: {
      "x-complete": "100vw",
      "y-complete": "100vh",
    },
  },
};
export const plugins = [];
