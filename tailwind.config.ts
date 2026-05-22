import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#030305",
          900: "#09090E",
          800: "#0D0D15",
        },
        brand: {
          violet: {
            DEFAULT: "hsl(var(--neural-violet) / <alpha-value>)",
            glow: "hsla(271, 91%, 65%, 0.12)",
          },
          amber: {
            DEFAULT: "hsl(var(--crypto-amber) / <alpha-value>)",
            glow: "hsla(24, 95%, 53%, 0.08)",
          },
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        panel: "6px",
        btn: "4px",
      },
      transitionTimingFunction: {
        "synaptic": "cubic-bezier(0.16, 1, 0.3, 1)",
        "consensus": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
