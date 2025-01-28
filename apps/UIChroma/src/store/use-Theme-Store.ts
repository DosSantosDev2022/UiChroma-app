import { create } from 'zustand'
import { defaultTheme, themes } from '@/enums/colors'
import { Theme } from '@/@types/colors-themes-types'
import { ThemeState } from '@/@types/theme-store-types'

const getInitialTheme = (): Theme => themes[0] || defaultTheme

export const useThemeStore = create<ThemeState>((set, get) => {
  const initialTheme = getInitialTheme()

  return {
    lightColors: initialTheme.light,
    darkColors: initialTheme.dark,
    selectedColor: null,
    theme: 'light',

    // Define o tema (light/dark)
    setTheme: (theme) => set({ theme }),

    // Atualiza o tema e cores selecionadas
    setSelectedColor: (colorLabel) => {
      const selectedTheme =
        themes.find((theme) => theme.label === colorLabel) || defaultTheme

      set({
        selectedColor: colorLabel,
        lightColors: selectedTheme.light,
        darkColors: selectedTheme.dark
      })
    },

    // Atualiza uma cor específica no tema claro
    updateLightColor: (colorKey, newColor) => {
      set((state) => ({
        lightColors: { ...state.lightColors, [colorKey]: newColor }
      }))
    },

    // Atualiza uma cor específica no tema escuro
    updateDarkColor: (colorKey, newColor) => {
      set((state) => ({
        darkColors: { ...state.darkColors, [colorKey]: newColor }
      }))
    }
  }
})
