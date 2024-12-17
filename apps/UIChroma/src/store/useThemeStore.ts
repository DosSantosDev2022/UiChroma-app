import { create } from 'zustand'
import { Colors } from '@/@types/colorsState'
import { defaultColors } from '@/enums/colors'
import { generateTheme } from '@/utils/generateTheme'

interface ThemeState {
  lightColors: Colors['light']
  darkColors: Colors['dark']
  readyColors: { light: Colors['light']; dark: Colors['dark'] }
  handleLightColorChange: (color: string, key: keyof Colors['light']) => void
  handleDarkColorChange: (color: string, key: keyof Colors['dark']) => void
  handleBaseColorChange: (color: any) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  lightColors: defaultColors.light,
  darkColors: defaultColors.dark,
  readyColors: {
    light: defaultColors.light,
    dark: defaultColors.dark
  },

  // Função para atualizar Light Mode
  handleLightColorChange: (color, key) =>
    set((state) => ({
      lightColors: { ...state.lightColors, [key]: color }
    })),

  // Função para atualizar Dark Mode
  handleDarkColorChange: (color, key) =>
    set((state) => ({
      darkColors: { ...state.darkColors, [key]: color }
    })),

  // Função para atualizar com templates
  handleBaseColorChange: (color) => {
    const newTheme = generateTheme(color)
    const { light, dark } = newTheme.colors
    set({
      lightColors: light,
      darkColors: dark,
      readyColors: newTheme.colors
    })
  }
}))
