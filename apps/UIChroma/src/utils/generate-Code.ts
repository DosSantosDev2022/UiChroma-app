import { Colors } from '@/@types/colors-themes-types'

export const generateCodeCss = (
  lightColors: Colors['light'],
  darkColors: Colors['dark']
) => {
  return `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer base {
        :root {
          --background: ${lightColors.background};
          --foreground: ${lightColors.foreground};

          --primary: ${lightColors.primary};
          --primary-hover: ${lightColors.primary_hover};
          --primary-foreground: ${lightColors.primary_foreground};
          --secondary: ${lightColors.secondary};
          --secondary-hover: ${lightColors.secondary_hover};
          --secondary-foreground: ${lightColors.secondary_foreground};
          --muted: ${lightColors.muted};
          --muted-hover: ${lightColors.muted_hover};
          --muted-foreground: ${lightColors.muted_foreground};
          --accent: ${lightColors.accent};
          --accent-hover: ${lightColors.accent_hover};
          --accent-foreground: ${lightColors.accent_foreground};

          --danger: ${lightColors.danger};
          --danger-hover: ${lightColors.danger_hover};
          --danger-foreground: ${lightColors.danger_foreground};
          --warning: ${lightColors.warning};
          --warning-hover: ${lightColors.warning_hover};
          --warning-foreground: ${lightColors.warning_foreground};
          --success: ${lightColors.success};
          --success-hover: ${lightColors.success_hover};
          --success-foreground: ${lightColors.success_foreground};

          --border: ${lightColors.border};
          --ring: ${lightColors.ring};
          --input: ${lightColors.input};

          --chart-1: ${lightColors.chart1};
          --chart-2: ${lightColors.chart2};
          --chart-3: ${lightColors.chart3};
          --chart-4: ${lightColors.chart4};
          --chart-5: ${lightColors.chart5};
       }

        .dark {
          --background: ${darkColors.background};
          --foreground: ${darkColors.foreground};

          --primary: ${darkColors.primary};
          --primary-hover: ${darkColors.primary_hover};
          --primary-foreground: ${darkColors.primary_foreground};
          --secondary: ${darkColors.secondary};
          --secondary-hover: ${darkColors.secondary_hover};
          --secondary-foreground: ${darkColors.secondary_foreground};
          --muted: ${darkColors.muted};
          --muted-hover: ${darkColors.muted_hover};
          --muted-foreground: ${darkColors.muted_foreground};
          --accent: ${darkColors.accent};
          --accent-hover: ${darkColors.accent_hover};
          --accent-foreground: ${darkColors.accent_foreground};

          --danger: ${darkColors.danger};
          --danger-hover: ${darkColors.danger_hover};
          --danger-foreground: ${darkColors.danger_foreground};
          --warning: ${darkColors.warning};
          --warning-hover: ${darkColors.warning_hover};
          --warning-foreground: ${darkColors.warning_foreground};
          --success: ${darkColors.success};
          --success-hover: ${darkColors.success_hover};
          --success-foreground: ${darkColors.success_foreground};

          --border: ${darkColors.border};
          --ring: ${darkColors.ring};
          --input: ${darkColors.input};

          --chart-1: ${darkColors.chart1};
          --chart-2: ${darkColors.chart2};
          --chart-3: ${darkColors.chart3};
          --chart-4: ${darkColors.chart4};
          --chart-5: ${darkColors.chart5};
        }
      }
  `
}

export const generateTailwindConfig = () => {
  return `
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

  }
  
  `
}
