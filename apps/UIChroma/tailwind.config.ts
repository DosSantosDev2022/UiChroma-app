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
          '50': '#f4f6fb',
          '100': '#e7eef7',
          '200': '#e7eef7',
          '300': '#cbdaec',
          '400': '#6796c9',
          '500': '#4479b3',
          '600': '#335f96',
          '700': '#2a4d7a',
          '800': '#264266',
          '900': '#233753',
          '950': '#182539',
        },
        secondary: {
          '50': '#ffffff',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwindcss-animated')],
}
export default config
