'use client'
import { Colors } from '@/@types/colorsState'
import { CodeBlock } from '@/components/global/codeBlock/codeBlock'
import { generateCodeCss, generateTailwindConfig } from '@/utils/generateCode'
import { Button } from '@repo/ChromaUI/components/button/Button.tsx'
import {
  ClipBoardAction,
  ClipBoardArea,
  ClipBoardContainer,
  ClipBoardHeader,
  ClipBoardLabel
} from '@repo/ChromaUI/components/clipboard/Clipboard.tsx'
import {
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalOverlay,
  ModalProvider,
  ModalRoot,
  ModalTitle,
  ModalTrigger
} from '@repo/ChromaUI/components/modal/Modal.tsx'
import { useState } from 'react'
import { BiLogoCss3 } from 'react-icons/bi'
import { IoCopy } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'

interface ModalCodeCssProps {
  colors: Colors
}

export function ModalCodeCss({ colors }: ModalCodeCssProps) {
  const [activeTab, setActiveTab] = useState<'globalcss' | 'tailwindConfig'>(
    'globalcss'
  )
  return (
    <ModalProvider>
      <ModalRoot>
        <ModalTrigger className="h-14 w-28 rounded-full">
          Copiar
          <IoCopy size={18} />
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
                  className={`duration-300 active:scale-95 ${
                    activeTab === 'globalcss'
                      ? 'bg-secondary text-secondary-foreground hover:bg-secondary-hover'
                      : ''
                  } p-1`}
                >
                  <BiLogoCss3 size={24} />
                </Button>
                <Button
                  sizes="icon"
                  data-active={
                    activeTab === 'tailwindConfig' ? 'true' : 'false'
                  }
                  onClick={() => setActiveTab('tailwindConfig')}
                  className={`duration-300 active:scale-95 ${
                    activeTab === 'tailwindConfig'
                      ? 'bg-secondary text-secondary-foreground hover:bg-secondary-hover'
                      : ''
                  } p-1`}
                >
                  <RiTailwindCssFill size={18} />
                </Button>
              </div>
              <ClipBoardContainer>
                <ClipBoardHeader>
                  <ClipBoardLabel>
                    Copiar{' '}
                    {activeTab === 'globalcss' ? 'CSS' : 'Tailwind Config'}
                  </ClipBoardLabel>
                  <ClipBoardAction
                    copyText={
                      activeTab === 'globalcss'
                        ? generateCodeCss(colors)
                        : generateTailwindConfig()
                    }
                  />
                </ClipBoardHeader>
                <ClipBoardArea>
                  <CodeBlock
                    code={
                      activeTab === 'globalcss'
                        ? generateCodeCss(colors)
                        : generateTailwindConfig()
                    }
                  />
                </ClipBoardArea>
              </ClipBoardContainer>
            </div>
          </div>
        </ModalContent>
      </ModalRoot>
    </ModalProvider>
  )
}
