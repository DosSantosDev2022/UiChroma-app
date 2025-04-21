import { describe, it, expect } from 'vitest'
import { generateTheme } from '@/utils/generate-Theme'
import type { HslColor } from 'react-colorful'

describe('generateTheme', () => {
	const mockColor: HslColor = { h: 210, s: 1, l: 0.56 }

	it('should generate theme object with light and dark modes', () => {
		const theme = generateTheme(mockColor)

		expect(theme).toHaveProperty('label', 'Generated Theme')
		expect(theme).toHaveProperty('light')
		expect(theme).toHaveProperty('dark')
	})

	it('should include all expected color keys in light mode', () => {
		const { light } = generateTheme(mockColor)
		const keys: (keyof typeof light)[] = [
			'background',
			'foreground',
			'primary',
			'primary_foreground',
			'primary_hover',
			'secondary',
			'secondary_foreground',
			'secondary_hover',
			'muted',
			'muted_foreground',
			'muted_hover',
			'accent',
			'accent_foreground',
			'accent_hover',
			'danger',
			'danger_foreground',
			'danger_hover',
			'warning',
			'warning_foreground',
			'warning_hover',
			'success',
			'success_foreground',
			'success_hover',
			'border',
			'input',
			'ring',
			'chart1',
			'chart2',
			'chart3',
			'chart4',
			'chart5',
		]

		for (const key of keys) {
			expect(light).toHaveProperty(key)
			expect(typeof light[key]).toBe('string')
		}
	})

	it('should include all expected color keys in dark mode', () => {
		const { dark } = generateTheme(mockColor)
		const keys: (keyof typeof dark)[] = [
			'background',
			'foreground',
			'primary',
			'primary_foreground',
			'primary_hover',
			'secondary',
			'secondary_foreground',
			'secondary_hover',
			'muted',
			'muted_foreground',
			'muted_hover',
			'accent',
			'accent_foreground',
			'accent_hover',
			'danger',
			'danger_foreground',
			'danger_hover',
			'warning',
			'warning_foreground',
			'warning_hover',
			'success',
			'success_foreground',
			'success_hover',
			'border',
			'input',
			'ring',
			'chart1',
			'chart2',
			'chart3',
			'chart4',
			'chart5',
		]

		for (const key of keys) {
			expect(dark).toHaveProperty(key)
			expect(typeof dark[key]).toBe('string')
		}
	})
})
