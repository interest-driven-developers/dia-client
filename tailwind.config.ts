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
      keyframes: {
        flash: {
          "25%, 40%": { opacity: "0" },
          "50%": { opacity: "1" },
          "75%": { opacity: "0" },
        },
        // fade
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeOutRight: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(20px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOutDown: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(20px)" },
        },

        // bounce
        bounceLeft: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-20px)" },
        },
      },
      animation: {
        flash: "flash 2s infinite",
        fadeInRight: "fadeInRight 1s ease-in-out",
        fadeOutRight: "fadeOutRight 1s ease-out",
        fadeInUp: "fadeInUp 1s ease-in-out",
        fadeOutDown: "fadeOutDown 1s ease-out",
        bounceLeft: "bounceLeft 2s infinite",
      },
      colors: {
        primary: "#651FFF",
      },
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
    },
  },
  plugins: [],
};
export default config;
