import type { Theme } from '@/@types/colors-themes-types'

export const updateCssVariables = (
	theme: 'light' | 'dark',
	lightColors: Theme['light'],
	darkColors: Theme['dark'],
) => {
	if (typeof document !== 'undefined') {
		const demoContainer = document.querySelector(
			'#CssVariables',
		) as HTMLElement
		if (demoContainer) {
			const colors = theme === 'dark' ? darkColors : lightColors

			// Atualizando as variáveis CSS com as cores do tema atual
			demoContainer.style.setProperty(
				'--color-background',
				`${colors.background}`,
			)
			demoContainer.style.setProperty(
				'--color-foreground',
				`${colors.foreground}`,
			)
			demoContainer.style.setProperty(
				'--color-primary',
				`${colors.primary}`,
			)
			demoContainer.style.setProperty(
				'--color-primary-hover',
				`${colors.primary_hover}`,
			)
			demoContainer.style.setProperty(
				'--color-primary-foreground',
				`${colors.primary_foreground}`,
			)
			demoContainer.style.setProperty(
				'--color-secondary',
				`${colors.secondary}`,
			)
			demoContainer.style.setProperty(
				'--color-secondary-hover',
				`${colors.secondary_hover}`,
			)
			demoContainer.style.setProperty(
				'--color-secondary-foreground',
				`${colors.secondary_foreground}`,
			)
			demoContainer.style.setProperty('--color-muted', `${colors.muted}`)
			demoContainer.style.setProperty(
				'--color-muted-hover',
				`${colors.muted_hover}`,
			)
			demoContainer.style.setProperty(
				'--color-muted-foreground',
				`${colors.muted_foreground}`,
			)

			// Cores adicionais
			demoContainer.style.setProperty('--color-accent', `${colors.accent}`)
			demoContainer.style.setProperty(
				'--color-accent-hover',
				`${colors.accent_hover}`,
			)
			demoContainer.style.setProperty(
				'--color-accent-foreground',
				`${colors.accent_foreground}`,
			)

			// Cores de feedback (danger, warning, success)
			demoContainer.style.setProperty('--color-danger', `${colors.danger}`)
			demoContainer.style.setProperty(
				'--color-danger-hover',
				`${colors.danger_hover}`,
			)
			demoContainer.style.setProperty(
				'--color-danger-foreground',
				`${colors.danger_foreground}`,
			)
			demoContainer.style.setProperty(
				'--color-warning',
				`${colors.warning}`,
			)
			demoContainer.style.setProperty(
				'--color-warning-hover',
				`${colors.warning_hover}`,
			)
			demoContainer.style.setProperty(
				'--color-warning-foreground',
				`${colors.warning_foreground}`,
			)
			demoContainer.style.setProperty('--success', `${colors.success}`)
			demoContainer.style.setProperty(
				'--color-success-hover',
				`${colors.success_hover}`,
			)
			demoContainer.style.setProperty(
				'--color-success-foreground',
				`${colors.success_foreground}`,
			)
			demoContainer.style.setProperty('--color-input', `${colors.input}`)
			demoContainer.style.setProperty('--color-ring', `${colors.ring}`)
			demoContainer.style.setProperty('--color-border', `${colors.border}`)

			// Cores para gráficos ou outros componentes
			demoContainer.style.setProperty('--color-chart1', `${colors.chart1}`)
			demoContainer.style.setProperty('--color-chart2', `${colors.chart2}`)
			demoContainer.style.setProperty('--color-chart3', `${colors.chart3}`)
			demoContainer.style.setProperty('--color-chart4', `${colors.chart4}`)
			demoContainer.style.setProperty('--color-chart5', `${colors.chart5}`)
		}
	}
}
