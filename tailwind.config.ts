import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'ui-sans-serif', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"', 'system-ui'],
    },
    extend: {
      fontFamily: {
        'heading': ['Raleway', 'ui-sans-serif', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"', 'system-ui'],
      },
      colors: {
        bgDark: {
          light: "#252525",
          DEFAULT: "#0a0a0a",
          dark: "rgb(21 21 22)",
          darker: "#000000",
        },
        primary: {
          light: "#c586ed",
          DEFAULT: "#b367e4",
          dark: "rgb(162 73 229)",
          darker: "rgb(130 47 192)",
        },
        slate: {
          42: "rgb(42 45 51)",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { transform: "translate3d(0,40px,0)", opacity: "0" },
          "100%": { transform: "translate3d(0,0,0)",opacity: "1" },
        },
        fadeInRight: {
          "0%": { transform: "translate3d(-40px,0,0)", opacity: "0" },
          "100%": { transform: "translate3d(0,0,0)",opacity: "1" },
        },
        fadeOutLeft: {
          "0%": { transform: "translate3d(0,0,0)", opacity: "1" },
          "100%": { transform: "translate3d(-40px,0,0)",opacity: "0" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        moveLeft: {
          "0%": {transform: "translateX(0)"},
          "100%": {transform: "translateX(-100%)"}
        },moveRight: {
          "0%": {transform: "translateX(0)"
          },
          "100%": {transform: "translateX(100%)"}
        },

      },
      animation: {
        fadeIn:"fadeIn 1s ease forwards",
        "fadeIn-long":"fadeIn 2.5s ease forwards",
        fadeUp:"fadeUp 1s ease forwards",
        inLeft: "fadeIn 800ms ease-in-out forwards, moveLeft 800ms ease-in-out forwards",
        inRight: "fadeIn 800ms ease-in-out forwards, moveRight 800ms ease-in-out forwards",
        outLeft: "fadeOut 800ms ease-in-out forwards, moveLeft 800ms ease-in-out forwards",
        outRight: "fadeOut 800ms ease-in-out forwards, moveRight 800ms ease-in-out forwards",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    function ({ addBase, theme }: PluginAPI) {
      function extractColorVars(
        colorObj: Record<string, any>,
        colorGroup = "",
      ): Record<string, string> {
        return Object.keys(colorObj).reduce(
          (vars, colorKey) => {
            const value = colorObj[colorKey];

            const newVars =
              typeof value === "string"
                ? { [`--color${colorGroup}-${colorKey}`]: value }
                : extractColorVars(value, `-${colorKey}`);

            return { ...vars, ...newVars };
          },
          {} as Record<string, string>,
        );
      }

      addBase({
        ":root": extractColorVars(theme("colors")),
      });
    },
  ],
} satisfies Config;
