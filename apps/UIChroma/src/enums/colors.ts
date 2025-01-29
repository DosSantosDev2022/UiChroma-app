import { Theme } from '@/@types/colors-themes-types'

export const defaultTheme: Theme = {
  label: 'defaultTheme',
  light: {
    background: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(240, 10%, 3.9%)',
    primary: 'hsl(240, 5.9%, 10%)',
    primary_hover: 'hsl(195, 100%, 50%)',
    primary_foreground: 'hsl(0, 0%, 98%)',
    secondary: 'hsl(240, 4.8%, 95.9%)',
    secondary_hover: 'hsl(0, 0%, 80%)',
    secondary_foreground: 'hsl(240, 5.9%, 10%)',
    accent: 'hsl(240, 4.8%, 95.9%)',
    accent_hover: 'hsl(240, 4.8%, 85%)',
    accent_foreground: 'hsl(240, 5.9%, 10%)',
    muted: 'hsl(240, 4.8%, 95.9%)',
    muted_hover: 'hsl(0, 0%, 90%)',
    muted_foreground: 'hsl(240, 3.8%, 46.1%)',

    danger: 'hsl(0, 84.2%, 60.2%)',
    danger_hover: 'hsl(0, 74.2%, 50.2%)',
    danger_foreground: 'hsl(0, 0%, 98%)',
    warning: 'hsl(43, 74%, 66%)',
    warning_hover: 'hsl(43, 64%, 56%)',
    warning_foreground: 'hsl(30, 80%, 20%)',
    success: 'hsl(173, 58%, 39%)',
    success_hover: 'hsl(173, 48%, 29%)',
    success_foreground: 'hsl(0, 0%, 98%)',

    border: 'hsl(240, 5.9%, 90%)',
    input: 'hsl(240, 5.9%, 90%)',
    ring: 'hsl(240, 5.9%, 10%)',

    chart1: 'hsl(12, 76%, 61%)',
    chart2: 'hsl(173, 58%, 39%)',
    chart3: 'hsl(197, 37%, 24%)',
    chart4: 'hsl(43, 74%, 66%)',
    chart5: 'hsl(27, 87%, 67%)'
  },
  dark: {
    background: 'hsl(240, 10%, 3.9%)',
    foreground: 'hsl(0, 0%, 98%)',

    primary: 'hsl(0, 0%, 98%)',
    primary_hover: 'hsl(240, 5.9%, 15%)',
    primary_foreground: 'hsl(240, 5.9%, 10%)',
    secondary: 'hsl(240, 3.7%, 15.9%)',
    secondary_hover: 'hsl(240, 3.7%, 25%)',
    secondary_foreground: 'hsl(0, 0%, 98%)',
    accent: 'hsl(240, 3.7%, 15.9%)',
    accent_hover: 'hsl(240, 3.7%, 20%)',
    accent_foreground: 'hsl(0, 0%, 98%)',
    muted: 'hsl(240, 3.7%, 15.9%)',
    muted_hover: 'hsl(240, 3.7%, 30%)',
    muted_foreground: 'hsl(240, 5%, 64.9%)',

    danger: 'hsl(0, 62.8%, 30.6%)',
    danger_hover: 'hsl(0, 62.8%, 40.6%)',
    danger_foreground: 'hsl(0, 0%, 98%)',
    warning: 'hsl(43, 74%, 50%)',
    warning_hover: 'hsl(43, 74%, 60%)',
    warning_foreground: 'hsl(30, 80%, 20%)',
    success: 'hsl(160, 60%, 45%)',
    success_hover: 'hsl(160, 50%, 35%)',
    success_foreground: 'hsl(0, 0%, 98%)',

    border: 'hsl(240, 3.7%, 15.9%)',
    input: 'hsl(240, 3.7%, 15.9%)',
    ring: 'hsl(240, 4.9%, 83.9%)',

    chart1: 'hsl(220, 70%, 50%)',
    chart2: 'hsl(160, 60%, 45%)',
    chart3: 'hsl(30, 80%, 55%)',
    chart4: 'hsl(280, 65%, 60%)',
    chart5: 'hsl(340, 75%, 55%)'
  }
}

export const themes: Theme[] = [
  {
    label: 'red',
    light: {
      background: 'hsl(0, 0%, 100%)',
      foreground: 'hsl(0, 0%, 3.9%)',
      primary: 'hsl(0, 72.2%, 50.6%)',
      primary_hover: 'hsl(0, 72.2%, 45%)',
      primary_foreground: 'hsl(0, 85.7%, 97.3%)',
      secondary: 'hsl(0, 0%, 96.1%)',
      secondary_hover: 'hsl(0, 0%, 85%)',
      secondary_foreground: 'hsl(0, 0%, 9%)',
      accent: 'hsl(0, 0%, 96.1%)',
      accent_hover: 'hsl(240, 4.8%, 85%)',
      accent_foreground: 'hsl(0, 0%, 9%)',
      muted: 'hsl(0, 0%, 96.1%)',
      muted_hover: 'hsl(0, 0%, 92%)',
      muted_foreground: 'hsl(0, 0%, 45.1%)',

      danger: 'hsl(0, 84.2%, 60.2%)',
      danger_hover: 'hsl(0, 74.2%, 50.2%)',
      danger_foreground: 'hsl(0, 0%, 98%)',
      warning: 'hsl(43, 74%, 66%)',
      warning_hover: 'hsl(43, 64%, 56%)',
      warning_foreground: 'hsl(30, 80%, 20%)',
      success: 'hsl(173, 58%, 39%)',
      success_hover: 'hsl(173, 48%, 29%)',
      success_foreground: 'hsl(0, 0%, 98%)',

      border: 'hsl(0, 0%, 89.8%)',
      input: 'hsl(0, 0%, 89.8%)',
      ring: 'hsl(0, 72.2%, 50.6%)',

      chart1: 'hsl(12, 76%, 61%)',
      chart2: 'hsl(173, 58%, 39%)',
      chart3: 'hsl(197, 37%, 24%)',
      chart4: 'hsl(43, 74%, 66%)',
      chart5: 'hsl(27, 87%, 67%)'
    },
    dark: {
      background: 'hsl(0, 0%, 3.9%)',
      foreground: 'hsl(0, 0%, 98%)',

      primary: 'hsl(0, 72.2%, 50.6%)',
      primary_hover: 'hsl(0, 72.2%, 45%)',
      primary_foreground: 'hsl(20, 85.7%, 97.3%)',
      secondary: 'hsl(0, 0%, 14.9%)',
      secondary_hover: 'hsl(240, 3.7%, 25%)',
      secondary_foreground: 'hsl(0, 0%, 98%)',
      accent: 'hsl(0, 0%, 14.9%)',
      accent_hover: 'hsl(240, 3.7%, 20%)',
      accent_foreground: 'hsl(0, 0%, 98%)',
      muted: 'hsl(0, 0%, 14.9%)',
      muted_hover: 'hsl(240, 3.7%, 30%)',
      muted_foreground: 'hsl(0, 0%, 63.9%)',

      danger: 'hsl(0, 62.8%, 30.6%)',
      danger_hover: 'hsl(0, 62.8%, 40.6%)',
      danger_foreground: 'hsl(0, 0%, 98%)',
      warning: 'hsl(43, 74%, 50%)',
      warning_hover: 'hsl(43, 74%, 60%)',
      warning_foreground: 'hsl(30, 80%, 20%)',
      success: 'hsl(160, 60%, 45%)',
      success_hover: 'hsl(160, 50%, 35%)',
      success_foreground: 'hsl(0, 0%, 98%)',

      border: 'hsl(0, 0%, 14.9%)',
      input: 'hsl(0, 0%, 14.9%)',
      ring: 'hsl(0, 72.2%, 50.6%)',

      chart1: 'hsl(220, 70%, 50%)',
      chart2: 'hsl(160, 60%, 45%)',
      chart3: 'hsl(30, 80%, 55%)',
      chart4: 'hsl(280, 65%, 60%)',
      chart5: 'hsl(340, 75%, 55%)'
    }
  },
  {
    label: 'blue',
    light: {
      background: 'hsl(0 0% 100%)',
      foreground: 'hsl(222.2 84% 4.9%)',
      primary: 'hsl(221.2 83.2% 53.3%)',
      primary_hover: 'hsl(221.2 83.2% 43.3%)',
      primary_foreground: 'hsl(210 40% 98%)',
      secondary: 'hsl(210 40% 96.1%)',
      secondary_hover: 'hsl(10 0% 80%)',
      secondary_foreground: 'hsl(222.2 47.4% 11.2%)',
      accent: 'hsl(210 40% 96.1%)',
      accent_hover: 'hsl(10 20% 90%)',
      accent_foreground: 'hsl(222.2 47.4% 11.2%)',
      muted: 'hsl(210 40% 96.1%)',
      muted_hover: 'hsl(210 40% 90.1%)',
      muted_foreground: 'hsl(215.4 16.3% 46.9%)',

      danger: 'hsl(0, 84.2%, 60.2%)',
      danger_hover: 'hsl(0, 74.2%, 50.2%)',
      danger_foreground: 'hsl(0, 0%, 98%)',
      warning: 'hsl(43, 74%, 66%)',
      warning_hover: 'hsl(43, 64%, 56%)',
      warning_foreground: 'hsl(30, 80%, 20%)',
      success: 'hsl(173, 58%, 39%)',
      success_hover: 'hsl(173, 48%, 29%)',
      success_foreground: 'hsl(0, 0%, 98%)',

      border: 'hsl(214.3 31.8% 91.4%)',
      input: 'hsl(214.3 31.8% 91.4%)',
      ring: 'hsl(221.2 83.2% 53.3%)',

      chart1: 'hsl(12 76% 61%)',
      chart2: 'hsl(173 58% 39%)',
      chart3: 'hsl(197 37% 24%)',
      chart4: 'hsl(43 74% 66%)',
      chart5: 'hsl(27 87% 67%)'
    },
    dark: {
      background: 'hsl(222.2 84% 4.9%)',
      foreground: 'hsl(210 40% 98%)',

      primary: 'hsl(217.2 91.2% 59.8%)',
      primary_hover: 'hsl(221.2 83.2% 43.3%)',
      primary_foreground: 'hsl(222.2 47.4% 11.2%)',
      secondary: 'hsl(217.2 32.6% 17.5%)',
      secondary_hover: 'hsl(217.2 32.6% 27.5%)',
      secondary_foreground: 'hsl(210 40% 98%)',
      accent: 'hsl(217.2 32.6% 17.5%)',
      accent_hover: 'hsl(217.2 32.6% 27.5%)',
      accent_foreground: 'hsl(210 40% 98%)',
      muted: 'hsl(217.2 32.6% 17.5%)',
      muted_hover: 'hsl(217.2 32.6% 27.5%)',
      muted_foreground: 'hsl(215 20.2% 65.1%)',

      danger: 'hsl(0, 62.8%, 30.6%)',
      danger_hover: 'hsl(0, 62.8%, 40.6%)',
      danger_foreground: 'hsl(0, 0%, 98%)',
      warning: 'hsl(43, 74%, 50%)',
      warning_hover: 'hsl(43, 74%, 60%)',
      warning_foreground: 'hsl(30, 80%, 20%)',
      success: 'hsl(160, 60%, 45%)',
      success_hover: 'hsl(160, 50%, 35%)',
      success_foreground: 'hsl(0, 0%, 98%)',

      border: 'hsl(217.2 32.6% 17.5%)',
      input: 'hsl(217.2 32.6% 17.5%)',
      ring: 'hsl(224.3 76.3% 48%)',

      chart1: 'hsl(220 70% 50%)',
      chart2: 'hsl(160 60% 45%)',
      chart3: 'hsl(30 80% 55%)',
      chart4: 'hsl(280 65% 60%)',
      chart5: 'hsl(340 75% 55%)'
    }
  },
  {
    label: 'violet',
    light: {
      background: 'hsl(0 0% 100%)',
      foreground: 'hsl(224 71.4% 4.1%)',
      primary: 'hsl(262.1 83.3% 57.8%)',
      primary_hover: 'hsl(262.1 83.3% 50%)',
      primary_foreground: 'hsl(210 20% 98%)',
      secondary: 'hsl(220 14.3% 95.9%)',
      secondary_hover: 'hsl(220 14.3% 85.9%)',
      secondary_foreground: 'hsl(220.9 39.3% 11%)',
      accent: 'hsl(220 14.3% 95.9%)',
      accent_hover: 'hsl(220 14.3% 85.9%)',
      accent_foreground: 'hsl(220.9 39.3% 11%)',
      muted: 'hsl(220 14.3% 95.9%)',
      muted_hover: 'hsl(220 14.3% 85.9%)',
      muted_foreground: 'hsl(220 8.9% 46.1%)',

      danger: 'hsl(0, 84.2%, 60.2%)',
      danger_hover: 'hsl(0, 74.2%, 50.2%)',
      danger_foreground: 'hsl(0, 0%, 98%)',
      warning: 'hsl(43, 74%, 66%)',
      warning_hover: 'hsl(43, 64%, 56%)',
      warning_foreground: 'hsl(30, 80%, 20%)',
      success: 'hsl(173, 58%, 39%)',
      success_hover: 'hsl(173, 48%, 29%)',
      success_foreground: 'hsl(0, 0%, 98%)',

      border: 'hsl(220 13% 91%)',
      input: 'hsl(220 13% 91%)',
      ring: 'hsl(262.1 83.3% 57.8%)',

      chart1: 'hsl(12 76% 61%)',
      chart2: 'hsl(173 58% 39%)',
      chart3: 'hsl(197 37% 24%)',
      chart4: 'hsl(43 74% 66%)',
      chart5: 'hsl(27 87% 67%)'
    },
    dark: {
      background: 'hsl(224 71.4% 4.1%)',
      foreground: 'hsl(210 20% 98%)',

      primary: 'hsl(263.4 70% 50.4%)',
      primary_hover: 'hsl(262.1 83.3% 50%)',
      primary_foreground: 'hsl(210 20% 98%)',
      secondary: 'hsl(215 27.9% 16.9%)',
      secondary_hover: 'hsl(215 27.9% 26.9%)',
      secondary_foreground: 'hsl(210 20% 98%)',
      accent: 'hsl(215 27.9% 16.9%)',
      accent_hover: 'hsl(215 27.9% 26.9%)',
      accent_foreground: 'hsl(210 20% 98%)',
      muted: 'hsl(215 27.9% 16.9%)',
      muted_hover: 'hsl(215 27.9% 26%)',
      muted_foreground: 'hsl(217.9 10.6% 64.9%)',

      danger: 'hsl(0, 62.8%, 30.6%)',
      danger_hover: 'hsl(0, 62.8%, 40.6%)',
      danger_foreground: 'hsl(0, 0%, 98%)',
      warning: 'hsl(43, 74%, 50%)',
      warning_hover: 'hsl(43, 74%, 60%)',
      warning_foreground: 'hsl(30, 80%, 20%)',
      success: 'hsl(160, 60%, 45%)',
      success_hover: 'hsl(160, 50%, 35%)',
      success_foreground: 'hsl(0, 0%, 98%)',

      border: 'hsl(215 27.9% 16.9%)',
      input: 'hsl(215 27.9% 16.9%)',
      ring: 'hsl(263.4 70% 50.4%)',

      chart1: 'hsl(220 70% 50%)',
      chart2: 'hsl(160 60% 45%)',
      chart3: 'hsl(30 80% 55%)',
      chart4: 'hsl(280 65% 60%)',
      chart5: 'hsl(340 75% 55%)'
    }
  }
]
