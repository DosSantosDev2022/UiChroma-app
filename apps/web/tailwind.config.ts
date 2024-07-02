import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '600': '#485e81',
          '700': '#3b4c69',
          '800': '#344258',
          '900': '#2f394b',
          '950': '#1f2532',
        },
        secondary: {
          '50': '#f5f7fa',
          '100': '#ebeef3',
          '200': '#d2dae5',
          '300': '#aab8cf',
          '400': '#7c93b4',
          '500': '#5b769c',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwindcss-animated')],
}
export default config
