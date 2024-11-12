import type { Config } from 'tailwindcss'
import chromaConfig from '../../packages/ChromaUI/tailwind.config.js';


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ChromaUI/**/*.{js,ts,jsx,tsx}',
    "./.storybook/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  ...chromaConfig,
  
  plugins: [require('tailwind-scrollbar'), require('tailwindcss-animated')],
}
export default config
