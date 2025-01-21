import { Colors } from '@/@types/colorsState'
import { Title } from '@/components/global/title/title'
import { ColorPicker } from '@/components/pages/themes/ColorPicker'
import { FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'

interface ColorModeSelectorProps {
  title: string
  colors: Colors['light'] | Colors['dark'] // Aceita tanto 'light' quanto 'dark'
  handleColorChange: (
    color: string,
    key: keyof Colors['light'] | keyof Colors['dark'] // Pode ser uma chave de 'light' ou 'dark'
  ) => void
  onClick: () => void
}

const ColorModeSelector = ({
  title,
  colors,
  handleColorChange,
  onClick
}: ColorModeSelectorProps) => {
  const icon =
    title.toLowerCase() === 'dark mode' ? (
      <FaMoon className="mr-2" />
    ) : (
      <MdSunny className="mr-2" />
    )
  return (
    <div className=" flex  flex-col items-center space-y-4  px-2 py-2.5">
      <div
        onClick={onClick}
        className="flex w-full cursor-pointer items-center justify-start rounded-md border border-border px-2 py-1.5 duration-300 active:scale-95"
      >
        {icon}
        <Title as="h4" className="text-xl">
          {title}
        </Title>
      </div>
      <div className="custom-scrollbar max-h-[360px] overflow-y-auto rounded-md border border-border px-2 py-1.5 shadow-sm">
        {Object.keys(colors).map((key) => {
          // Garantir que o key seja uma chave válida de Colors['light'] ou Colors['dark']
          const colorKey = key as keyof Colors['light'] | keyof Colors['dark']
          return (
            <div key={key} className="mt-6 flex flex-col items-start ">
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
    </div>
  )
}

export default ColorModeSelector
