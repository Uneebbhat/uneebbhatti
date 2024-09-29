/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        indigo: {
          50: "#EBEEFB",
          100: "#C0CBF2",
          200: "#A1B2EB",
          300: "#768FE2",
          400: "#5C79DD",
          500: "#3358D4",
          600: "#2E50C1",
          700: "#243E97",
          800: "#1C3075",
          900: "#152559",
        },
        black: {
          50: "#E6E6E7",
          100: "#B3B3B3",
          200: "#8E8E8F",
          300: "#5A5A5C",
          400: "#3A3A3C",
          500: "#09090B",
          600: "#08080A",
          700: "#060608",
          800: "#050506",
          900: "#040405",
        },
        lightGray: {
          50: "#FEFEFE",
          100: "#FDFDFD",
          200: "#FBFBFB",
          300: "#FAFAFA",
          400: "#F9F9F9",
          500: "#F7F7F7",
          600: "#E1E1E1",
          700: "#AFAFAF",
          800: "#888888",
          900: "#686868",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
