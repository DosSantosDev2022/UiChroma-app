'use client'
import { Colors } from '@/@types/colorsState'
import { Title } from '@/components/global/title/title'
import ColorModeSelector from '@/components/pages/themes/ColorModeSelector'
import { ExempleComponents } from '@/components/pages/themes/exempleComponents'
import { ModalCodeCss } from '@/components/pages/themes/ModalCodeCss'
import { defaultColors, templateTailwindColors } from '@/enums/colors'
import { generateTheme } from '@/utils/generateTheme'
import {
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalProvider,
  ModalRoot,
  ModalTitle,
  ModalTrigger
} from '@repo/ChromaUI/components/modal/Modal.tsx'
import { useState } from 'react'

export default function ThemeCreatePage() {
  const [lightColors, setLightColors] = useState<Colors['light']>(
    defaultColors.light
  )
  const [darkColors, setDarkColors] = useState<Colors['dark']>(
    defaultColors.dark
  )
  const [readyColors, setReadyColors] = useState<{
    light: Colors['light']
    dark: Colors['dark']
  }>({
    light: defaultColors.light,
    dark: defaultColors.dark
  })

  // Função para atualizar a cor no tema Light
  const handleLightColorChange = (
    color: string,
    key: keyof Colors['light']
  ) => {
    setLightColors((prevColors) => ({
      ...prevColors,
      [key]: color
    }))
  }

  // Função para atualizar a cor no tema Dark
  const handleDarkColorChange = (color: string, key: keyof Colors['dark']) => {
    setDarkColors((prevColors) => ({
      ...prevColors,
      [key]: color
    }))
  }

  // Função para selecionar cores prontas
  const handleBaseColorChange = (color: any) => {
    const newTheme = generateTheme(color) // Gerar tema baseado na cor
    const { light, dark } = newTheme.colors
    // Atualizar as cores de light e dark mode com o tema gerado
    setLightColors(light)
    setDarkColors(dark)

    setReadyColors(newTheme.colors)
  }

  return (
    <div className="flex flex-col space-y-10">
      <section className="relative mx-auto p-2">
        <div className="mb-6 flex flex-col items-center justify-center md:mb-6">
          <div className="w-full space-y-6 border md:my-14 md:mb-8">
            <div className="space-y-1 text-center">
              <Title className="text-6xl">Gerador de temas</Title>
              <p className="text-base font-normal text-muted-foreground">
                Selecione as cores abaixo para personalizar seu tema.
              </p>
            </div>

            {/* Seletor de cores prontas */}
            <div className="flex w-full items-center justify-end gap-2 p-4">
              <ModalProvider>
                <ModalRoot>
                  <ModalTrigger className="h-12 w-28 rounded-lg">
                    Templates
                  </ModalTrigger>

                  <ModalContent className="max-w-lg">
                    <ModalHeader>
                      <ModalTitle>Templates Tailwind CSS</ModalTitle>
                      <ModalClose>X</ModalClose>
                    </ModalHeader>
                    <ModalDescription>
                      Escolha uma cor base para gerar seu tema baseando-se nas
                      cores do Tailwind css:
                    </ModalDescription>
                    <div className="custom-scrollbar mt-2 flex max-h-[220px]  flex-wrap gap-4 overflow-y-auto  rounded-md border bg-background px-2 py-2.5">
                      {/* Lista de cores prontas (você pode definir essas cores como quiser) */}
                      {templateTailwindColors.map((color) => (
                        <button
                          key={color.label}
                          onClick={() => handleBaseColorChange(color.value)}
                          style={{ backgroundColor: color.value }}
                          className="h-8 w-8 rounded-lg border border-transparent"
                          title={color.label}
                        />
                      ))}
                    </div>
                  </ModalContent>
                </ModalRoot>
              </ModalProvider>

              <ModalCodeCss lightColors={lightColors} darkColors={darkColors} />
            </div>

            <div className="flex w-full flex-row items-center justify-between gap-4 p-2">
              {/* Seletor para o Light Mode */}
              <ColorModeSelector
                title="Light mode"
                colors={readyColors.light}
                handleColorChange={handleLightColorChange}
              />

              {/* Seletor para o Dark Mode */}
              <ColorModeSelector
                title="Dark mode"
                colors={readyColors.dark}
                handleColorChange={handleDarkColorChange}
              />
            </div>
          </div>
        </div>
        {/* <ExampleofColors lightColors={lightColors} darkColors={darkColors} /> */}
      </section>

      <section>
        <ExempleComponents lightColors={lightColors} darkColors={darkColors} />
      </section>
    </div>
  )
}
