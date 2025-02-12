'use client'
import { Colors } from '@/@types/colors-themes-types'
import { CodeBlock } from '@/components/global/codeBlock/codeBlock'
import { useThemeStore } from '@/store/use-Theme-Store'
import { formatColors } from '@/utils/format-Colors'
import { generateCodeCss, generateTailwindConfig } from '@/utils/generate-Code'
import {
  Button,
  ClipBoardAction,
  ClipBoardArea,
  ClipBoardContainer,
  ClipBoardHeader,
  ClipBoardLabel,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalOverlay,
  ModalRoot,
  ModalTitle,
  ModalTrigger
} from '@repo/ChromaUI/components'
import { useState } from 'react'
import { BiLogoCss3 } from 'react-icons/bi'
import { IoCopy } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'

export function ModalCodeCss() {
  const { darkColors, lightColors } = useThemeStore()
  const [activeTab, setActiveTab] = useState<'globalcss' | 'tailwindConfig'>(
    'globalcss'
  )

  return (
    <ModalRoot>
      <ModalTrigger className="w-full rounded-lg">
        Copiar
        <IoCopy size={16} />
      </ModalTrigger>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <div className="flex flex-col items-start justify-center gap-1">
            <ModalTitle>Theme - UIChroma</ModalTitle>
            <ModalDescription>
              Copie e cole o nosso código fonte em seus arquivos global.css e
              tailwind.config.ts.
            </ModalDescription>
          </div>
          <ModalClose />
        </ModalHeader>
        <div className="flex flex-col gap-2">
          <div className="custom-scrollbar sticky max-h-[468px] overflow-y-auto">
            <div className="mb-1 flex items-center justify-start gap-1">
              <Button
                sizes="icon"
                data-active={activeTab === 'globalcss' ? 'true' : 'false'}
                onClick={() => setActiveTab('globalcss')}
                className={`duration-300 active:scale-95 ${activeTab === 'globalcss' ? 'bg-secondary text-secondary-foreground hover:bg-secondary-hover' : ''} p-1`}
              >
                <BiLogoCss3 size={24} />
              </Button>
              <Button
                sizes="icon"
                data-active={activeTab === 'tailwindConfig' ? 'true' : 'false'}
                onClick={() => setActiveTab('tailwindConfig')}
                className={`duration-300 active:scale-95 ${activeTab === 'tailwindConfig' ? 'bg-secondary text-secondary-foreground hover:bg-secondary-hover' : ''} p-1`}
              >
                <RiTailwindCssFill size={18} />
              </Button>
            </div>
            <ClipBoardContainer>
              <ClipBoardHeader>
                <ClipBoardLabel>
                  Copiar {activeTab === 'globalcss' ? 'CSS' : 'Tailwind Config'}
                </ClipBoardLabel>
                <ClipBoardAction
                  copyText={
                    activeTab === 'globalcss'
                      ? generateCodeCss(
                          formatColors(lightColors) as Colors,
                          formatColors(darkColors) as Colors
                        )
                      : generateTailwindConfig()
                  }
                />
              </ClipBoardHeader>
              <ClipBoardArea>
                <CodeBlock
                  code={
                    activeTab === 'globalcss'
                      ? generateCodeCss(
                          formatColors(lightColors) as Colors,
                          formatColors(darkColors) as Colors
                        )
                      : generateTailwindConfig()
                  }
                />
              </ClipBoardArea>
            </ClipBoardContainer>
          </div>
        </div>
      </ModalContent>
    </ModalRoot>
  )
}
