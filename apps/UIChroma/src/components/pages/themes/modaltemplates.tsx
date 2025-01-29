'use client'

import { themes } from '@/enums/colors'
import { useThemeStore } from '@/store/use-Theme-Store'
import { generateTheme } from '@/utils/generate-Theme'
import {
  Button,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalOverlay,
  ModalRoot,
  ModalTitle,
  ModalTrigger,
  useModalContext
} from '@repo/ChromaUI/components'
import { HslColor } from 'colord'
import { useState } from 'react'
import { HslColorPicker } from 'react-colorful'
import { FaPlus } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa6'
import { MdPalette } from 'react-icons/md'

const ModalTemplates = () => {
  const { selectedColor, handleColorClick, handleCustomColor } = useThemeStore()
  const [isShowPicker, setIsShowPicker] = useState(false)

  const handleShowPicker = () => {
    setIsShowPicker(!isShowPicker)
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
          <div className="custom-scrollbar grid grid-cols-3 gap-2 border border-border p-3">
            {themes.map((color) => (
              <button
                key={color.label}
                onClick={() => handleColorClick(color.label)}
                className={`relative inline-flex h-8 items-center justify-start rounded-md border border-border p-3 shadow duration-300 active:scale-95`}
                title={color.label}
              >
                {selectedColor === color.label && (
                  <FaCheck className="absolute inset-0 -top-2 left-[85%] h-5 w-5 rounded-full border-2 border-success bg-success text-success-foreground" />
                )}
                <span
                  className={`mr-1 flex h-6 w-6 shrink-0 -translate-x-1 items-center justify-center rounded-full`}
                  style={{ backgroundColor: color.light.primary }}
                />
                <p className="text-muted-foreground">{color.label}</p>
              </button>
            ))}
          </div>
          <div>
            <Button
              variants="primary"
              className="gap-6"
              onClick={handleShowPicker}
              sizes="full"
            >
              Nova cor base
              <FaPlus />
            </Button>
          </div>
          {isShowPicker && (
            <div className="px-2 py-3">
              <HslColorPicker onChange={handleCustomColor} />
            </div>
          )}
        </ModalContent>
      </ModalRoot>
    </>
  )
}

export { ModalTemplates }
