import { create } from 'zustand'
import { defaultTheme, themes } from '@/enums/colors'
import { Theme } from '@/@types/colors-themes-types'

interface ThemeState {
  lightColors: Theme['light']
  darkColors: Theme['dark']
  selectedColor: string | null
  theme: 'light' | 'dark'
  setSelectedColor: (colorLabel: string) => void
  setTheme: (theme: 'light' | 'dark') => void
  handleBaseColorChange: (colorLabel: string) => void
  handleLightColorChange: (
    newColor: string,
    colorKey: keyof Theme['light']
  ) => void
  handleDarkColorChange: (
    newColor: string,
    colorKey: keyof Theme['dark']
  ) => void
}

const getInitialTheme = (): Theme => themes[0] || defaultTheme

export const useThemeStore = create<ThemeState>((set) => {
  const initialTheme = getInitialTheme()

  return {
    lightColors: initialTheme.light,
    darkColors: initialTheme.dark,
    selectedColor: null,
    theme: 'light',

    // Função para atualizar o tema
    setTheme: (theme) => set({ theme }),

    // Função para atualizar a cor base selecionada
    setSelectedColor: (colorLabel) => {
      set({ selectedColor: colorLabel })
      const selectedTheme = themes.find((theme) => theme.label === colorLabel)

      if (selectedTheme) {
        set({
          lightColors: selectedTheme.light,
          darkColors: selectedTheme.dark
        })
      }
    },

    // Função que altera as cores de acordo com o tema selecionado
    handleBaseColorChange: (colorLabel) => {
      const selectedTheme =
        themes.find((theme) => theme.label === colorLabel) || defaultTheme

      if (selectedTheme) {
        set({
          lightColors: selectedTheme.light,
          darkColors: selectedTheme.dark
        })
      }
    },

    handleLightColorChange: (newColor, colorKey) => {
      set((state) => {
        const updatedLightColors = { ...state.lightColors }
        updatedLightColors[colorKey] = newColor
        return { lightColors: updatedLightColors }
      })
    },

    handleDarkColorChange: (newColor, colorKey) => {
      set((state) => {
        const updatedDarkColors = { ...state.darkColors }
        updatedDarkColors[colorKey] = newColor
        return { darkColors: updatedDarkColors }
      })
    }
  }
})
