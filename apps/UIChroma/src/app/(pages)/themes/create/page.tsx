'use client'

import { Title } from '@/components/global/title/title'
import ColorModeSelector from '@/components/pages/themes/ColorModeSelector'
import { ExempleComponents } from '@/components/pages/themes/exempleComponents'
import { ModalCodeCss } from '@/components/pages/themes/ModalCodeCss'
import { ModalTemplates } from '@/components/pages/themes/modaltemplates'
import { useThemeStore } from '@/store/useThemeStore'

export default function ThemeCreatePage() {
  const { readyColors, handleLightColorChange, handleDarkColorChange } =
    useThemeStore()

  return (
    <div className="flex flex-col space-y-10">
      <section className="relative mx-auto p-2">
        <div className="mb-6 flex flex-col items-center justify-center md:mb-6">
          <div className="w-full space-y-6  p-2 md:my-14 md:mb-8">
            <div className="space-y-1 ">
              <div className="space-y-1  text-center">
                <Title className="text-6xl">Gerador de temas</Title>
                <p className="text-base font-normal text-muted-foreground">
                  Selecione as cores abaixo para personalizar seu tema.
                </p>
              </div>

              {/* Seletor de cores prontas */}
              <div className="flex w-full items-center justify-center gap-2 p-4">
                <ModalTemplates />
                <ModalCodeCss />
              </div>
            </div>

            <div className="flex w-full flex-row items-center justify-between gap-4">
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
        <ExempleComponents />
      </section>
    </div>
  )
}
