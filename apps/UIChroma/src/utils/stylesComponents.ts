import { Colors } from '@/@types/colorsState'

export const updateCssVariables = (
  lightColors: Colors['light'],
  darkColors: Colors['dark']
) => {
  if (typeof document !== 'undefined') {
    const demoContainer = document.querySelector(
      '#demo-container'
    ) as HTMLElement

    if (demoContainer) {
      demoContainer.style.setProperty(
        '--background',
        `${lightColors.background}`
      )
      demoContainer.style.setProperty(
        '--foreground',
        `${lightColors.foreground}`
      )
      demoContainer.style.setProperty('--primary', `${lightColors.primary}`)
      demoContainer.style.setProperty(
        '--primary-hover',
        `${lightColors.primary_hover}`
      )
      demoContainer.style.setProperty(
        '--primary-foreground',
        `${lightColors.primary_foreground}`
      )
      demoContainer.style.setProperty('--secondary', `${lightColors.secondary}`)
      demoContainer.style.setProperty(
        '--secondary-hover',
        `${lightColors.secondary_hover}`
      )
      demoContainer.style.setProperty(
        '--secondary-foreground',
        `${lightColors.secondary_foreground}`
      )
      demoContainer.style.setProperty('--muted', `${lightColors.muted}`)
      demoContainer.style.setProperty(
        '--muted-hover',
        `${lightColors.muted_hover}`
      )
      demoContainer.style.setProperty(
        '--muted-foreground',
        `${lightColors.muted_foreground}`
      )

      // Definindo as cores adicionais
      demoContainer.style.setProperty('--accent', `${lightColors.accent}`)
      demoContainer.style.setProperty(
        '--accent-hover',
        `${lightColors.accent_hover}`
      )
      demoContainer.style.setProperty(
        '--accent-foreground',
        `${lightColors.accent_foreground}`
      )

      // Cores de feedback (danger, warning, success)
      demoContainer.style.setProperty('--danger', `${lightColors.danger}`)
      demoContainer.style.setProperty(
        '--danger-hover',
        `${lightColors.danger_hover}`
      )
      demoContainer.style.setProperty(
        '--danger-foreground',
        `${lightColors.danger_foreground}`
      )
      demoContainer.style.setProperty('--warning', `${lightColors.warning}`)
      demoContainer.style.setProperty(
        '--warning-hover',
        `${lightColors.warning_hover}`
      )
      demoContainer.style.setProperty(
        '--warning-foreground',
        `${lightColors.warning_foreground}`
      )
      demoContainer.style.setProperty('--success', `${lightColors.success}`)
      demoContainer.style.setProperty(
        '--success-hover',
        `${lightColors.success_hover}`
      )
      demoContainer.style.setProperty(
        '--success-foreground',
        `${lightColors.success_foreground}`
      )

      demoContainer.style.setProperty('--ring', `${lightColors.ring}`)
      demoContainer.style.setProperty('--border', `${lightColors.border}`)

      // Cores para gráficos ou outros componentes
      demoContainer.style.setProperty('--chart1', `${lightColors.chart1}`)
      demoContainer.style.setProperty('--chart2', `${lightColors.chart2}`)
      demoContainer.style.setProperty('--chart3', `${lightColors.chart3}`)
      demoContainer.style.setProperty('--chart4', `${lightColors.chart4}`)
      demoContainer.style.setProperty('--chart5', `${lightColors.chart5}`)
      // Definindo as cores para dark mode
      demoContainer.style.setProperty(
        '--dark-background',
        `${darkColors.background}`
      )
      demoContainer.style.setProperty(
        '--dark-foreground',
        `${darkColors.foreground}`
      )
      demoContainer.style.setProperty('--dark-primary', `${darkColors.primary}`)
      demoContainer.style.setProperty(
        '--dark-primary-hover',
        `${darkColors.primary_hover}`
      )
      demoContainer.style.setProperty(
        '--dark-primary-foreground',
        `${darkColors.primary_foreground}`
      )
      demoContainer.style.setProperty(
        '--dark-secondary',
        `${darkColors.secondary}`
      )
      demoContainer.style.setProperty(
        '--dark-secondary-hover',
        `${darkColors.secondary_hover}`
      )
      demoContainer.style.setProperty(
        '--dark-secondary-foreground',
        `${darkColors.secondary_foreground}`
      )
      demoContainer.style.setProperty('--dark-muted', `${darkColors.muted}`)
      demoContainer.style.setProperty(
        '--dark-muted-hover',
        `${darkColors.muted_hover}`
      )
      demoContainer.style.setProperty(
        '--dark-muted-foreground',
        `${darkColors.muted_foreground}`
      )

      // Cores de feedback (danger, warning, success)
      demoContainer.style.setProperty('--danger', `${darkColors.danger}`)
      demoContainer.style.setProperty(
        '--danger-hover',
        `${darkColors.danger_hover}`
      )
      demoContainer.style.setProperty(
        '--danger-foreground',
        `${darkColors.danger_foreground}`
      )
      demoContainer.style.setProperty('--warning', `${darkColors.warning}`)
      demoContainer.style.setProperty(
        '--warning-hover',
        `${darkColors.warning_hover}`
      )
      demoContainer.style.setProperty(
        '--warning-foreground',
        `${darkColors.warning_foreground}`
      )
      demoContainer.style.setProperty('--success', `${darkColors.success}`)
      demoContainer.style.setProperty(
        '--success-hover',
        `${darkColors.success_hover}`
      )
      demoContainer.style.setProperty(
        '--success-foreground',
        `${darkColors.success_foreground}`
      )

      demoContainer.style.setProperty('--ring', `${darkColors.ring}`)
      demoContainer.style.setProperty('--border', `${darkColors.border}`)

      // Cores para gráficos ou outros componentes
      demoContainer.style.setProperty('--chart1', `${darkColors.chart1}`)
      demoContainer.style.setProperty('--chart2', `${darkColors.chart2}`)
      demoContainer.style.setProperty('--chart3', `${darkColors.chart3}`)
      demoContainer.style.setProperty('--chart4', `${darkColors.chart4}`)
      demoContainer.style.setProperty('--chart5', `${darkColors.chart5}`)
    }
  }
}
