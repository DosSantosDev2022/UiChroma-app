import { Colors } from '@/@types/colorsState'
import { Title } from '@/components/global/title/title'
import { ColorPicker } from '@/components/pages/themes/ColorPicker'
import { useThemeStore } from '@/store/useThemeStore'

interface ColorModeSelectorProps {
  title: string
  colors: Colors['light'] | Colors['dark'] // Aceita tanto 'light' quanto 'dark'
  handleColorChange: (
    color: string,
    key: keyof Colors['light'] | keyof Colors['dark'] // Pode ser uma chave de 'light' ou 'dark'
  ) => void
}

const ColorModeSelector = ({
  title,
  colors,
  handleColorChange
}: ColorModeSelectorProps) => {

  return (
    <div className="custom-scrollbar flex max-h-[380px] flex-col items-center overflow-y-auto rounded-md border px-2 py-2.5">
      <Title as="h4" className="text-xl">
        {title}
      </Title>
      {Object.keys(colors).map((key) => {
        // Garantir que o key seja uma chave válida de Colors['light'] ou Colors['dark']
        const colorKey = key as keyof Colors['light'] | keyof Colors['dark']
        return (
          <div key={key} className="mt-6 flex flex-col items-start">
            <span className="mb-2 ml-6 text-start text-sm capitalize text-muted-foreground">
              {colorKey}
            </span>
            <ColorPicker
              color={colors[colorKey]} // Aqui estamos acessando a cor usando colorKey
              onChange={(newColor: string) =>
                handleColorChange(newColor, colorKey)
              }
            />
          </div>
        )
      })}
    </div>
  )
}

export default ColorModeSelector
