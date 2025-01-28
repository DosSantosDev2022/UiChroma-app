'use client'

import { Colors, Theme } from '@/@types/colors-themes-types'
import { Title } from '@/components/global/title'
import { ColorPicker } from '@/components/pages/themes/ColorPicker'
import { FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'
import { useThemeStore } from '@/store/use-Theme-Store'
import { useEffect } from 'react'

interface ColorModeSelectorProps {
  mode: 'light' | 'dark'
}

const ColorModeSelector = ({ mode }: ColorModeSelectorProps) => {
  const {
    darkColors,
    lightColors,
    setTheme,
    theme,
    handleLightColorChange,
    handleDarkColorChange
  } = useThemeStore()

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const colors = mode === 'light' ? lightColors : darkColors
  const handleColorChange =
    mode === 'light' ? handleLightColorChange : handleDarkColorChange

  const icon =
    mode === 'dark' ? <FaMoon className="mr-2" /> : <MdSunny className="mr-2" />

  const title = mode === 'dark' ? 'Dark Mode' : 'Light Mode'

  return (
    <div className=" flex flex-col items-center space-y-4 px-2 py-2.5">
      <div
        onClick={() => setTheme(mode)}
        className="flex w-full cursor-pointer items-center justify-start rounded-md border border-border px-2 py-1.5 duration-300 active:scale-95"
      >
        {icon}
        <Title as="h4" className="text-xl">
          {title}
        </Title>
      </div>
      <div className="custom-scrollbar max-h-[360px] overflow-y-auto rounded-md border border-border px-2 py-1.5 shadow-sm">
        {Object.keys(colors).map((key) => {
          const colorKey = key as keyof Theme['light'] | keyof Theme['dark']
          return (
            <div key={key} className="mt-6 flex flex-col items-start">
              <span className="mb-2 ml-6 text-start text-sm capitalize text-muted-foreground">
                {colorKey}
              </span>
              <ColorPicker
                color={colors[colorKey]}
                onChange={(newColor: string) =>
                  handleColorChange(newColor, colorKey)
                }
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { ColorModeSelector }
