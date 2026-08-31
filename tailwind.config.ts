import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(16, 185, 129, 0.28)',
        neon: '0 0 60px rgba(59, 130, 246, 0.26)',
      },
    },
  },
  plugins: [],
};

export default config;
