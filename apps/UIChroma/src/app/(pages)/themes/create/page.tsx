'use client'
import { Colors } from '@/@types/colorsState'
import { Title } from '@/components/global/title/title'
import { ColorPicker } from '@/components/pages/themes/ColorPicker'
import { ExampleofColors } from '@/components/pages/themes/exampleofColors'
import { ExempleComponents } from '@/components/pages/themes/exempleComponents'
import { ModalCodeCss } from '@/components/pages/themes/ModalCodeCss'
import { defaultColors } from '@/enums/colors'
import { generateTheme } from '@/utils/generateTheme'
import { useState } from 'react'

export default function ThemeCreatePage() {
  const [colors, setColors] = useState<Colors>(defaultColors)

  const handleBaseColorChange = (color: any) => {
    const newTheme = generateTheme(color) // Gerar tema baseado na cor
    setColors(newTheme.colors) // Atualizar estado com o novo tema
  }

  return (
    <div className="flex flex-col space-y-10">
      <section className="relative mx-auto p-2">
        <div className=" mb-6 flex flex-col items-center  justify-center md:mb-6">
          <div className="space-y-6 md:my-14 md:mb-8">
            <div className="max-w-xl space-y-1 text-center">
              <Title className="text-6xl">Gerador de temas</Title>
              <p className="text-base font-normal text-muted-foreground">
                Pressione a barra de espaço, digite um código hexadecimal ou
                altere o Valores HSL para criar uma escala de cores
                personalizada
              </p>
            </div>
            <div className="flex w-full flex-row items-center justify-between gap-2 p-2">
              <ColorPicker
                color={colors.primary}
                onChange={handleBaseColorChange}
              />

              <ModalCodeCss colors={colors} />
            </div>
          </div>
        </div>
        <ExampleofColors Colors={colors} />
      </section>

      <section>
        <ExempleComponents colors={colors} />
      </section>
    </div>
  )
}
