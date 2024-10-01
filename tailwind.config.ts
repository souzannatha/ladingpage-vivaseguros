import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "121.75rem",
      },
      colors: {
        "blue-header": "#72AAFF",
        "blue-01": "#522AF9",
        "blue-02": "#73CBD9",
        "blue-03": "#250A94",
        "blue-04": "#E8E8FF",
        "blue-05": "#51477D",
        "blue-06": "#3712D0",
        blueBlack: "#7F77A0",
      },
    },
  },
  plugins: [],
};
export default config;
