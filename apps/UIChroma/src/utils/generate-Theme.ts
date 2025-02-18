import type { Theme } from '@/@types/colors-themes-types'
import { type Colord, colord, extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'
import mixPlugin from 'colord/plugins/mix'
import type { HslColor } from 'react-colorful'

extend([a11yPlugin, mixPlugin])

// Gera contraste foreground baseado no background
const generateContrast = (
	color: string,
	lightContrast = '#ffffff',
	darkContrast = '#000000',
) => {
	const base = colord(color)
	return base.contrast(lightContrast) >= 4.5
		? colord(lightContrast).toHslString()
		: colord(darkContrast).toHslString()
}

// Define as cores secundárias mais claras
const generateSecondaryColor = (base: Colord) =>
	base.desaturate(0.4).lighten(0.2).darken(0.2)

// Define cores suaves (muted) com base no tema
const generateMutedColor = (mode: 'light' | 'dark') => {
	if (mode === 'light') {
		return {
			muted: colord('#f3f4f6').toHslString(),
			mutedForeground: colord('#6b7280').toHslString(),
			muted_hover: colord('#f3f4f6').toHslString(),
		}
	// biome-ignore lint/style/noUselessElse: <explanation>
	} else {
		return {
			muted: colord('#1C202A').toHslString(),
			mutedForeground: colord('#9aa0a7').toHslString(),
			muted_hover: colord('#4a4a4a').toHslString(),
		}
	}
}

// Gera cores de destaque (accent)
const generateAccentColor = (primary: Colord) =>
	primary.saturate(0.5).lighten(0.2)

// Gera tons de hover
const generateHoverColor = (base: Colord) => base.lighten(0.1)

// Função para gerar cores dinâmicas
const generateStatusColor = (baseColor: string) => {
	const color = colord(baseColor)

	return {
		base: color.toHslString(),
		foreground: generateContrast(color.toHslString()),
		hover: generateHoverColor(color).toHslString(),
	}
}

// Função para gerar tons de gráficos
const generateChartColors = (base: Colord) =>
	Array.from(
		{ length: 5 },
		(_, i) =>
			base
				.rotate(i * 30)
				.saturate(0.3 + i * 0.1)
				.lighten(0.1)
				.toHslString() || '#00000',
	)

// Define as cores de borda
const generateBorderColor = (
	background: Colord,
	mode: 'light' | 'dark',
) => {
	return mode === 'light'
		? background
				.darken(0.1)
				.toHslString() // Light mode: mais escura
		: background.lighten(0.1).toHslString() // Dark mode: mais clara
}

// Gera cores de input
const generateInputColor = (
	background: Colord,
	mode: 'light' | 'dark',
) => {
	return mode === 'light'
		? background
				.lighten(0.1)
				.toHslString() // Light mode: mais escura
		: background.darken(0.1).toHslString() // Dark mode: mais clara
}

// Função para gerar cores principais
const generateModeColors = (
	base: Colord,
	mode: 'light' | 'dark',
	primary: Colord,
	secondary: Colord,
	accent: Colord,
	chartColors: string[],
) => {
	const isLight = mode === 'light'

	const background = isLight
		? base.lighten(0.9).mix(base).toHslString()
		: base.darken(0.8).mix(base).toHslString()
	const foreground = generateContrast(background)

	const mutedColors = generateMutedColor(mode)

	const {
		base: danger,
		foreground: danger_foreground,
		hover: danger_hover,
	} = generateStatusColor('#dc2626')
	const {
		base: warning,
		foreground: warning_foreground,
		hover: warning_hover,
	} = generateStatusColor('#fbbf24')
	const {
		base: success,
		foreground: success_foreground,
		hover: success_hover,
	} = generateStatusColor('#10b981')

	const border = generateBorderColor(base, mode)
	const input = generateInputColor(base, mode)

	return {
		background,
		foreground,

		primary: primary.toHslString(),
		primary_foreground: generateContrast(primary.toHslString()),
		primary_hover: generateHoverColor(primary).toHslString(),

		secondary: secondary.toHslString(),
		secondary_foreground: generateContrast(secondary.toHslString()),
		secondary_hover: generateHoverColor(secondary).toHslString(),

		muted: mutedColors.muted,
		muted_foreground: mutedColors.mutedForeground,
		muted_hover: mutedColors.muted_hover,

		accent: accent.toHslString(),
		accent_foreground: generateContrast(accent.toHslString()),
		accent_hover: generateHoverColor(accent).toHslString(),

		danger,
		danger_foreground,
		danger_hover,

		warning,
		warning_foreground,
		warning_hover,

		success,
		success_foreground,
		success_hover,

		border: border,
		input: input,
		ring: primary.toHslString(),

		chart1: chartColors[0],
		chart2: chartColors[1],
		chart3: chartColors[2],
		chart4: chartColors[3],
		chart5: chartColors[4],
	}
}

// Função principal para criar o tema
export const generateTheme = (primaryColor: HslColor): Theme => {
	const baseLight = colord('#f7fafc') // Cor base para o modo claro
	const baseDark = colord('#18181b') // Cor base para o modo escuro
	const primary = colord(primaryColor)
	const secondary = generateSecondaryColor(primary)
	const accent = generateAccentColor(primary)
	const chartColors = generateChartColors(primary)

	return {
		label: 'Generated Theme',
		light: generateModeColors(
			baseLight,
			'light',
			primary,
			secondary,
			accent,
			chartColors,
		),
		dark: generateModeColors(
			baseDark,
			'dark',
			primary,
			secondary,
			accent,
			chartColors,
		),
	}
}
