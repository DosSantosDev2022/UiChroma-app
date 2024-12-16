import { Colors } from '@/@types/colorsState'

export const updateCssVariables = (colors: Colors) => {
  if (typeof document !== 'undefined') {
    const demoContainer = document.querySelector(
      '#demo-container'
    ) as HTMLElement

    if (demoContainer) {
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

      // Definindo as cores adicionais
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

      demoContainer.style.setProperty('--ring', `${colors.ring}`)
      demoContainer.style.setProperty('--border', `${colors.border}`)

      // Cores para gráficos ou outros componentes
      demoContainer.style.setProperty('--chart1', `${colors.chart1}`)
      demoContainer.style.setProperty('--chart2', `${colors.chart2}`)
      demoContainer.style.setProperty('--chart3', `${colors.chart3}`)
      demoContainer.style.setProperty('--chart4', `${colors.chart4}`)
      demoContainer.style.setProperty('--chart5', `${colors.chart5}`)

      // Definindo as cores para dark mode
      demoContainer.style.setProperty(
        '--dark-background',
        `${colors.dark_background}`
      )
      demoContainer.style.setProperty(
        '--dark-foreground',
        `${colors.dark_foreground}`
      )
      demoContainer.style.setProperty(
        '--dark-primary',
        `${colors.dark_primary}`
      )
      demoContainer.style.setProperty(
        '--dark-primary-hover',
        `${colors.dark_primary_hover}`
      )
      demoContainer.style.setProperty(
        '--dark-primary-foreground',
        `${colors.dark_primary_foreground}`
      )
      demoContainer.style.setProperty(
        '--dark-secondary',
        `${colors.dark_secondary}`
      )
      demoContainer.style.setProperty(
        '--dark-secondary-hover',
        `${colors.dark_secondary_hover}`
      )
      demoContainer.style.setProperty(
        '--dark-secondary-foreground',
        `${colors.dark_secondary_foreground}`
      )
      demoContainer.style.setProperty('--dark-muted', `${colors.dark_muted}`)
      demoContainer.style.setProperty(
        '--dark-muted-hover',
        `${colors.dark_muted_hover}`
      )
      demoContainer.style.setProperty(
        '--dark-muted-foreground',
        `${colors.dark_muted_foreground}`
      )

      // Cores de feedback (danger, warning, success)
      demoContainer.style.setProperty('--danger', `${colors.dark_danger}`)
      demoContainer.style.setProperty(
        '--danger-hover',
        `${colors.dark_danger_hover}`
      )
      demoContainer.style.setProperty(
        '--danger-foreground',
        `${colors.dark_danger_foreground}`
      )
      demoContainer.style.setProperty('--warning', `${colors.dark_warning}`)
      demoContainer.style.setProperty(
        '--warning-hover',
        `${colors.dark_warning_hover}`
      )
      demoContainer.style.setProperty(
        '--warning-foreground',
        `${colors.dark_warning_foreground}`
      )
      demoContainer.style.setProperty('--success', `${colors.dark_success}`)
      demoContainer.style.setProperty(
        '--success-hover',
        `${colors.dark_success_hover}`
      )
      demoContainer.style.setProperty(
        '--success-foreground',
        `${colors.dark_success_foreground}`
      )

      demoContainer.style.setProperty('--ring', `${colors.dark_ring}`)
      demoContainer.style.setProperty('--border', `${colors.dark_border}`)

      // Cores para gráficos ou outros componentes
      demoContainer.style.setProperty('--chart1', `${colors.dark_chart1}`)
      demoContainer.style.setProperty('--chart2', `${colors.dark_chart2}`)
      demoContainer.style.setProperty('--chart3', `${colors.dark_chart3}`)
      demoContainer.style.setProperty('--chart4', `${colors.dark_chart4}`)
      demoContainer.style.setProperty('--chart5', `${colors.dark_chart5}`)
    }
  }
}
