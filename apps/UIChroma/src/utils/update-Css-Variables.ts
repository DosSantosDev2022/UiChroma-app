import { Theme } from '@/@types/colors-themes-types'

export const updateCssVariables = (
  theme: 'light' | 'dark',
  lightColors: Theme['light'],
  darkColors: Theme['dark']
) => {
  if (typeof document !== 'undefined') {
    const demoContainer = document.querySelector('#CssVariables') as HTMLElement
    if (demoContainer) {
      const colors = theme === 'dark' ? darkColors : lightColors

      // Atualizando as variáveis CSS com as cores do tema atual
      demoContainer.style.setProperty('--background', `${colors.background}`)
      demoContainer.style.setProperty('--foreground', `${colors.foreground}`)
      demoContainer.style.setProperty('--primary', `${colors.primary}`)
      demoContainer.style.setProperty(
        '--primary-hover',
        `${colors.primary_hover}`
      )
      demoContainer.style.setProperty(
        '--primary-foreground',
        `${colors.primary_foreground}`
      )
      demoContainer.style.setProperty('--secondary', `${colors.secondary}`)
      demoContainer.style.setProperty(
        '--secondary-hover',
        `${colors.secondary_hover}`
      )
      demoContainer.style.setProperty(
        '--secondary-foreground',
        `${colors.secondary_foreground}`
      )
      demoContainer.style.setProperty('--muted', `${colors.muted}`)
      demoContainer.style.setProperty('--muted-hover', `${colors.muted_hover}`)
      demoContainer.style.setProperty(
        '--muted-foreground',
        `${colors.muted_foreground}`
      )

      // Cores adicionais
      demoContainer.style.setProperty('--accent', `${colors.accent}`)
      demoContainer.style.setProperty(
        '--accent-hover',
        `${colors.accent_hover}`
      )
      demoContainer.style.setProperty(
        '--accent-foreground',
        `${colors.accent_foreground}`
      )

      // Cores de feedback (danger, warning, success)
      demoContainer.style.setProperty('--danger', `${colors.danger}`)
      demoContainer.style.setProperty(
        '--danger-hover',
        `${colors.danger_hover}`
      )
      demoContainer.style.setProperty(
        '--danger-foreground',
        `${colors.danger_foreground}`
      )
      demoContainer.style.setProperty('--warning', `${colors.warning}`)
      demoContainer.style.setProperty(
        '--warning-hover',
        `${colors.warning_hover}`
      )
      demoContainer.style.setProperty(
        '--warning-foreground',
        `${colors.warning_foreground}`
      )
      demoContainer.style.setProperty('--success', `${colors.success}`)
      demoContainer.style.setProperty(
        '--success-hover',
        `${colors.success_hover}`
      )
      demoContainer.style.setProperty(
        '--success-foreground',
        `${colors.success_foreground}`
      )
      demoContainer.style.setProperty('--input', `${colors.input}`)
      demoContainer.style.setProperty('--ring', `${colors.ring}`)
      demoContainer.style.setProperty('--border', `${colors.border}`)

      // Cores para gráficos ou outros componentes
      demoContainer.style.setProperty('--chart1', `${colors.chart1}`)
      demoContainer.style.setProperty('--chart2', `${colors.chart2}`)
      demoContainer.style.setProperty('--chart3', `${colors.chart3}`)
      demoContainer.style.setProperty('--chart4', `${colors.chart4}`)
      demoContainer.style.setProperty('--chart5', `${colors.chart5}`)
    }
  }
}
