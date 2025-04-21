import '@testing-library/jest-dom'
import { describe, it, expect, beforeEach } from 'vitest'
import { updateCssVariables } from '@/utils/update-Css-Variables'

const mockColors = {
	background: '#ffffff',
	foreground: '#000000',
	primary: '#007bff',
	primary_hover: '#0056b3',
	primary_foreground: '#ffffff',
	secondary: '#6c757d',
	secondary_hover: '#5a6268',
	secondary_foreground: '#ffffff',
	muted: '#f8f9fa',
	muted_hover: '#e2e6ea',
	muted_foreground: '#6c757d',
	accent: '#17a2b8',
	accent_hover: '#138496',
	accent_foreground: '#ffffff',
	danger: '#dc3545',
	danger_hover: '#c82333',
	danger_foreground: '#ffffff',
	warning: '#ffc107',
	warning_hover: '#e0a800',
	warning_foreground: '#212529',
	success: '#28a745',
	success_hover: '#218838',
	success_foreground: '#ffffff',
	input: '#e9ecef',
	ring: '#dee2e6',
	border: '#ced4da',
	chart1: '#6610f2',
	chart2: '#6f42c1',
	chart3: '#e83e8c',
	chart4: '#fd7e14',
	chart5: '#20c997',
}

describe('updateCssVariables', () => {
	let container: HTMLElement

	beforeEach(() => {
		// Cria um container simulado no DOM
		container = document.createElement('div')
		container.id = 'CssVariables'
		document.body.appendChild(container)
	})

	it('should apply light theme CSS variables correctly', () => {
		updateCssVariables('light', mockColors, mockColors)

		expect(container.style.getPropertyValue('--color-background')).toBe(
			mockColors.background,
		)
		expect(container.style.getPropertyValue('--color-primary')).toBe(
			mockColors.primary,
		)
		expect(container.style.getPropertyValue('--color-chart5')).toBe(
			mockColors.chart5,
		)
	})

	it('should apply dark theme CSS variables correctly', () => {
		const darkTheme = { ...mockColors, background: '#111111' }

		updateCssVariables('dark', mockColors, darkTheme)
		const element =
			document.getElementById('CssVariables') ?? document.documentElement

		expect(element.style.getPropertyValue('--color-background')).toBe(
			darkTheme.background,
		)
	})

	it('should not throw error if container does not exist', () => {
		// Remove o container
		document.body.innerHTML = ''

		// Deve rodar sem lançar erro
		expect(() =>
			updateCssVariables('light', mockColors, mockColors),
		).not.toThrow()
	})
})
