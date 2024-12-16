import { Colors } from '@/@types/colorsState'

export const generateCodeCss = (colors: Colors) => {
  return `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer base {
        :root {
          --background: ${colors.background};
          --foreground: ${colors.foreground};

          --primary: ${colors.primary};
          --primary-hover: ${colors.primary_hover};
          --primary-foreground: ${colors.primary_foreground};
          --secondary: ${colors.secondary};
          --secondary-hover: ${colors.secondary_hover};
          --secondary-foreground: ${colors.secondary_foreground};
          --muted: ${colors.muted};
          --muted-hover: ${colors.muted_hover};
          --muted-foreground: ${colors.muted_foreground};
          --accent: ${colors.accent};
          --accent-hover: ${colors.accent_hover};
          --accent-foreground: ${colors.accent_foreground};

          --danger: ${colors.danger};
          --danger-hover: ${colors.danger_hover};
          --danger-foreground: ${colors.danger_foreground};
          --warning: ${colors.warning};
          --warning-hover: ${colors.warning_hover};
          --warning-foreground: ${colors.warning_foreground};
          --success: ${colors.success};
          --success-hover: ${colors.success_hover};
          --success-foreground: ${colors.success_foreground};

          --border: ${colors.border};
          --ring: ${colors.ring};

          --chart-1: ${colors.chart1};
          --chart-2: ${colors.chart2};
          --chart-3: ${colors.chart3};
          --chart-4: ${colors.chart4};
          --chart-5: ${colors.chart5};
       }

        .dark {
          --background: ${colors.dark_background};
          --foreground: ${colors.dark_foreground};

          --primary: ${colors.dark_primary};
          --primary-hover: ${colors.dark_primary_hover};
          --primary-foreground: ${colors.dark_primary_foreground};
          --secondary: ${colors.dark_secondary};
          --secondary-hover: ${colors.dark_secondary_hover};
          --secondary-foreground: ${colors.dark_secondary_foreground};
          --muted: ${colors.dark_muted};
          --muted-hover: ${colors.dark_muted_hover};
          --muted-foreground: ${colors.dark_muted_foreground};
          --accent: ${colors.dark_accent};
          --accent-hover: ${colors.dark_accent_hover};
          --accent-foreground: ${colors.dark_accent_foreground};

          --danger: ${colors.dark_danger};
          --danger-hover: ${colors.dark_danger_hover};
          --danger-foreground: ${colors.dark_danger_foreground};
          --warning: ${colors.dark_warning};
          --warning-hover: ${colors.dark_warning_hover};
          --warning-foreground: ${colors.dark_warning_foreground};
          --success: ${colors.dark_success};
          --success-hover: ${colors.dark_success_hover};
          --success-foreground: ${colors.dark_secondary_foreground};

          --border: ${colors.dark_border};
          --ring: ${colors.dark_ring};

          --chart-1: ${colors.dark_chart1};
          --chart-2: ${colors.dark_chart2};
          --chart-3: ${colors.dark_chart3};
          --chart-4: ${colors.dark_chart4};
          --chart-5: ${colors.dark_chart5};
          } 
      }
        
   `
}

export const generateTailwindConfig = () => {
  return `

  import type { Config } from 'tailwindcss'

  const config: Config = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
        theme: {
         extend: {
            colors: {
              background: 'hsl(var(--background))',
              foreground: 'hsl(var(--foreground))',

              primary: 'hsl(var(--primary))',
              'primary-hover': 'hsl(var(--primary_hover))',
              'primary-foreground': 'hsl(var(--primary_foreground))',
              secondary: 'hsl(var(--secondary))',
              'secondary-hover': 'hsl(var(--secondary_hover))',
              'secondary-foreground': 'hsl(var(--secondary_foreground))',
              muted: 'hsl(var(--muted))',
              'muted-hover': 'hsl(var(--muted_hover))',
              'muted-foreground': 'hsl(var(--muted_foreground))',
              accent: 'hsl(var(--accent))',
              'accent-hover': 'hsl(var(--accent_hover))',
              'accent-foreground': 'hsl(var(--accent_foreground))',

              danger: 'hsl(var(--danger))',
              'danger-hover': 'hsl(var(--danger_hover))',
              'danger-foreground': 'hsl(var(--danger_foreground))',
              warning: 'hsl(var(--warning))',
              'warning-hover': 'hsl(var(--warning_hover))',
              'warning-foreground': 'hsl(var(--warning_foreground))',
              success: 'hsl(var(--success))',
              'success-hover': 'hsl(var(--success_hover))',
              'success-foreground': 'hsl(var(--success_foreground))',

              border: 'hsl(var(--border))',
              input: 'hsl(var(--input))',
              ring: 'hsl(var(--ring))',

              'chart-1': 'hsl(var(--chart1))',
              'chart-2': 'hsl(var(--chart2))',
              'chart-3': 'hsl(var(--chart3))',
              'chart-4': 'hsl(var(--chart4))',
              'chart-5': 'hsl(var(--chart5))',
            },
          },
        },

     export default config
  `
}
