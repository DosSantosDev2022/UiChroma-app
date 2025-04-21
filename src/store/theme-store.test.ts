
import { describe, expect, it, beforeEach } from 'vitest'
import { act } from '@testing-library/react'
import { useThemeStore } from './use-Theme-Store'
import { defaultTheme, themes } from '@/enums/colors'
import { colord } from 'colord'
import { generateTheme } from '@/utils/generate-Theme'

describe('useThemeStore', () => {
  beforeEach(() => {
    // Resetar o estado antes de cada teste
    const { setTheme, setSelectedColor, setCustomColor } = useThemeStore.getState()
    setTheme('light')
    setSelectedColor(defaultTheme.label)
    setCustomColor({ h: 0, s: 0, l: 100 })
  })

  it('should set the theme to dark', () => {
    act(() => {
      useThemeStore.getState().setTheme('dark')
    })

    const { theme } = useThemeStore.getState()
    expect(theme).toBe('dark')
  })

  it('should switch to an existing theme when using setSelectedColor', () => {
    const newLabel = themes[1]?.label ?? 'default-theme-label'


    act(() => {
      useThemeStore.getState().setSelectedColor(newLabel)
    })

    const { selectedColor, lightColors } = useThemeStore.getState()
    expect(selectedColor).toBe(newLabel)
    expect(lightColors).toEqual(themes[1]?.light)
  })

  it('should set custom color with setCustomColor', () => {
    const custom = { h: 210, s: 0.5, l: 0.4 }

    act(() => {
      useThemeStore.getState().setCustomColor(custom)
    })

    const { customColor, selectedColor, lightColors } = useThemeStore.getState()
    expect(customColor).toEqual(custom)
    expect(selectedColor).toBeNull()
    expect(lightColors).toEqual(generateTheme(custom).light)
  })

  it('should update light theme color', () => {
    act(() => {
      useThemeStore.getState().updateLightColor('primary', colord('#123456').toHslString())
    })

    const { lightColors } = useThemeStore.getState()
    expect(lightColors.primary).toBe(colord('#123456').toHslString())
  })

  it('should update dark theme color', () => {
    act(() => {
      useThemeStore.getState().updateDarkColor('primary', colord('#abcdef').toHslString())
    })

    const { darkColors } = useThemeStore.getState()
    expect(darkColors.primary).toBe(colord('#abcdef').toHslString())
  })

  it('handleColorClick should change the theme correctly', () => {
    const colorLabel = themes[1]?.label ?? 'default-theme-label'

    act(() => {
      useThemeStore.getState().handleColorClick(colorLabel)
    })

    const { selectedColor } = useThemeStore.getState()
    expect(selectedColor).toBe(colorLabel)
  })

  it('handleCustomColor should set custom color correctly', () => {
    const color = { h: 300, s: 1, l: 0.5 }

    act(() => {
      useThemeStore.getState().handleCustomColor(color)
    })

    const { customColor } = useThemeStore.getState()
    expect(customColor).toEqual(color)
  })
})
