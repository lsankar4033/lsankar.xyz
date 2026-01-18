import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ibm-plex": ["var(--font-ibm-plex)"],
        "work-sans": ["var(--font-work-sans)"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "#1a1a1a",
            lineHeight: "1.75",
            a: {
              color: "#2563eb",
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "border-color 0.2s ease",
              "&:hover": {
                borderBottomColor: "#2563eb",
              },
            },
            h1: {
              fontFamily: "var(--font-work-sans), sans-serif",
              fontWeight: "500",
              letterSpacing: "-0.025em",
            },
            h2: {
              fontFamily: "var(--font-work-sans), sans-serif",
              fontWeight: "500",
              letterSpacing: "-0.02em",
            },
            h3: {
              fontFamily: "var(--font-work-sans), sans-serif",
              fontWeight: "500",
              letterSpacing: "-0.015em",
            },
            blockquote: {
              quotes: "none",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
