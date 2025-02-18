import type { Theme } from '@/@types/colors-themes-types'
import type { ThemeState } from '@/@types/theme-store-types'
import { defaultTheme, themes } from '@/enums/colors'
import { generateTheme } from '@/utils/generate-Theme'
import type { HslColor } from 'react-colorful'
import { create } from 'zustand'

const getInitialTheme = (): Theme => themes[0] || defaultTheme

export const useThemeStore = create<ThemeState>((set) => {
	const initialTheme = getInitialTheme()

	return {
		lightColors: initialTheme.light,
		darkColors: initialTheme.dark,
		selectedColor: null,
		theme: 'light',
		customColor: { h: 0, s: 0, l: 100 },

		// Define o tema (light/dark)
		setTheme: (theme) => set({ theme }),

		// Atualiza o tema e cores selecionadas
		setSelectedColor: (colorLabel) => {
			const selectedTheme =
				themes.find((theme) => theme.label === colorLabel) || defaultTheme

			set({
				selectedColor: colorLabel,
				lightColors: selectedTheme.light,
				darkColors: selectedTheme.dark,
			})
		},

		// Define uma cor customizada
		setCustomColor: (color) => {
			const theme = generateTheme(color)
			set({
				customColor: color,
				lightColors: theme.light,
				darkColors: theme.dark,
				selectedColor: null,
			})
		},

		// Atualiza uma cor específica no tema claro
		updateLightColor: (colorKey, newColor) => {
			set((state) => ({
				lightColors: { ...state.lightColors, [colorKey]: newColor },
			}))
		},

		// Atualiza uma cor específica no tema escuro
		updateDarkColor: (colorKey, newColor) => {
			set((state) => ({
				darkColors: { ...state.darkColors, [colorKey]: newColor },
			}))
		},

		// seleciona cor base para tema
		handleColorClick: (colorLabel: string) => {
			useThemeStore.getState().setSelectedColor(colorLabel)
		},

		// seleciona uma cor customizada para o tema
		handleCustomColor: (color: HslColor) => {
			useThemeStore.getState().setCustomColor(color)
		},
	}
})
