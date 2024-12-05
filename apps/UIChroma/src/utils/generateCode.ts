import { Colors } from "@/@types/colorsState";


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
          --primary-hover: ${colors.primary_hover}
          --primary-foreground: ${colors.primary_foreground};
          --secondary: ${colors.secondary};
          --secondary-hover: ${colors.secondary_hover}
          --secondary-foreground: ${colors.secondary_foreground};
          --muted: ${colors.muted};
          --muted-hover: ${colors.muted_hover}
          --muted-foreground: ${colors.muted_foreground};
          --accent: ${colors.accent};
          --accent-hover ${colors.accent_hover}
          --accent-foreground: ${colors.accent_foreground};

          --danger: ${colors.danger};
          --danger-hover: ${colors.danger_hover}
          --danger-foreground: ${colors.danger_foreground};
          --warning: ${colors.warning}
          --warning-hover: ${colors.warning_hover}
          --warning-foreground: ${colors.warning_foregorund}
          --sucess: ${colors.sucess}
          --sucess-hover: ${colors.sucess_hover}
          --sucess-foreground: ${colors.sucess_foreground}

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
          --primary-hover: ${colors.dark_primary_hover}
          --primary-foreground: ${colors.dark_primary_foreground};
          --secondary: ${colors.dark_secondary};
          --secondary-hover: ${colors.dark_secondary_hover}
          --secondary-foreground: ${colors.dark_secondary_foreground};
          --muted: ${colors.dark_muted};
          --muted-hover: ${colors.dark_muted_hover}
          --muted-foreground: ${colors.dark_muted_foreground};
          --accent: ${colors.dark_accent};
          --accent-hover: ${colors.dark_accent_hover}
          --accent-foreground: ${colors.dark_accent_foreground};

          --danger: ${colors.dark_danger};
          --danger-hover: ${colors.dark_danger_hover}
          --danger-foreground: ${colors.dark_danger_foreground};
          --warning: ${colors.dark_warning}
          --warning: ${colors.dark_warning_hover}
          --warning-foreground: ${colors.dark_warning_foregorund}
          --sucess: ${colors.dark_sucess}
          --sucess: ${colors.dark_sucess_hover}
          --sucess-foreground: ${colors.dark_secondary_foreground}

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
};

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
              'background-hover': 'hsl(var(--background-hover))',
              foreground: 'hsl(var(--foreground))',
              'foreground-hover': 'hsl(var(--foreground-hover))',
              primary: 'hsl(var(--primary))',
              'primary-hover': 'hsl(var(--primary-hover))',
              'primary-foreground': 'hsl(var(--primary-foreground))',
              secondary: 'hsl(var(--secondary))',
              'secondary-hover': 'hsl(var(--secondary-hover))',
              'secondary-foreground': 'hsl(var(--secondary-foreground))',
              muted: 'hsl(var(--muted))',
              'muted-hover': 'hsl(var(--muted-hover))',
              'muted-foreground': 'hsl(var(--muted-foreground))',
              accent: 'hsl(var(--accent))',
              'accent-hover': 'hsl(var(--accent-hover))',
              'accent-foreground': 'hsl(var(--accent-foreground))',
              destructive: 'hsl(var(--destructive))',
              'destructive-hover': 'hsl(var(--destructive-hover))',
              'destructive-foreground': 'hsl(var(--destructive-foreground))',
              border: 'hsl(var(--border))',
              'border-hover': 'hsl(var(--border-hover))',
              input: 'hsl(var(--input))',
              'input-hover': 'hsl(var(--input-hover))',
              ring: 'hsl(var(--ring))',
              'ring-hover': 'hsl(var(--ring-hover))',
              'chart-1': 'hsl(var(--chart-1))',
              'chart-1-hover': 'hsl(var(--chart-1-hover))',
              'chart-2': 'hsl(var(--chart-2))',
              'chart-2-hover': 'hsl(var(--chart-2-hover))',
              'chart-3': 'hsl(var(--chart-3))',
              'chart-3-hover': 'hsl(var(--chart-3-hover))',
              'chart-4': 'hsl(var(--chart-4))',
              'chart-4-hover': 'hsl(var(--chart-4-hover))',
              'chart-5': 'hsl(var(--chart-5))',
              'chart-5-hover': 'hsl(var(--chart-5-hover))',
            },
          },
        },

     export default config
  `
}