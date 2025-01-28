'use client'

import { themes } from '@/enums/colors'
import { useThemeStore } from '@/store/use-Theme-Store'
import {
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalOverlay,
  ModalRoot,
  ModalTitle,
  ModalTrigger
} from '@repo/ChromaUI/components'
import { FaCheck } from 'react-icons/fa6'
import { MdPalette } from 'react-icons/md'

const ModalTemplates = () => {
  const { selectedColor, setSelectedColor, setTheme } = useThemeStore()

  const handleColorClick = (colorLabel: string) => {
    setSelectedColor(colorLabel)
    setTheme('light') // Definindo o tema para 'light' após seleção
  }

  return (
    <>
      <ModalRoot>
        <ModalTrigger className="w-28 rounded-lg">
          Templates
          <MdPalette size={16} />
        </ModalTrigger>
        <ModalOverlay variant="blur" />
        <ModalContent className="max-w-lg">
          <ModalHeader>
            <ModalTitle>Templates Tailwind CSS</ModalTitle>
            <ModalClose>X</ModalClose>
          </ModalHeader>
          <ModalDescription>
            Escolha um tema base para gerar seu tema baseando-se nas cores do
            Tailwind CSS:
          </ModalDescription>
          <div className="custom-scrollbar mt-2 flex max-h-[220px]  flex-wrap gap-4 overflow-y-auto  rounded-md border border-border bg-background px-2 py-2.5">
            {themes.map((color) => (
              <button
                key={color.label}
                onClick={() => handleColorClick(color.label)}
                style={{ backgroundColor: color.light.primary }}
                className={`relative h-8 w-8 rounded-lg duration-300 active:scale-75`}
                title={color.label}
              >
                {selectedColor === color.label && (
                  <FaCheck className="absolute inset-0 -top-1 left-4 h-4 w-4 rounded-full border-2 border-success bg-success text-success-foreground" />
                )}
              </button>
            ))}
          </div>
        </ModalContent>
      </ModalRoot>
    </>
  )
}

export { ModalTemplates }
