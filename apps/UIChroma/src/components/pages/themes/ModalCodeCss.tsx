'use client'
import { Button } from '@repo/ChromaUI/components/button/Button.tsx'
import { CodeBlock } from '@/components/global/codeBlock/codeBlock'
import { generateCodeCss, generateTailwindConfig } from '@/utils/generateCode'
import { ClipBoardContainer, ClipBoardHeader, ClipBoardLabel, ClipBoardAction, ClipBoardArea } from '@repo/ChromaUI/components/clipboard/Clipboard.tsx'
import { ModalProvider, ModalTrigger, ModalContent, ModalOverlay, ModalRoot, ModalClose } from '@repo/ChromaUI/components/modal/Modal.tsx'
import { useState } from 'react'
import { Colors } from '@/@types/colorsState'

interface ModalCodeCssProps {
  colors: Colors
}

export function ModalCodeCss({ colors }: ModalCodeCssProps) {
  const [activeTab, setActiveTab] = useState<"globalcss" | "tailwindConfig">(
    "globalcss"
  );
  return (
    <ModalProvider>
      <ModalRoot>
        <ModalTrigger className='w-32'>Code</ModalTrigger>
        <ModalOverlay />
        <ModalContent>
          <div>
            <span>Copiar</span>
            <ModalClose>X</ModalClose>
          </div>
          <div className="flex flex-col gap-2">
            <div className="sticky max-h-[468px] overflow-y-auto custom-scrollbar">
              <div className="flex items-center justify-start gap-1 mb-1">
                <Button
                  data-active={activeTab === "globalcss" ? "true" : "false"}
                  onClick={() => setActiveTab("globalcss")}
                  className={`active:scale-95 duration-500 ${activeTab === "globalcss"
                    ? "text-primary-foreground bg-primary"
                    : ""
                    }`}
                  
                >
                  Global.css
                </Button>
                <Button
                  data-active={activeTab === "tailwindConfig" ? "true" : "false"}
                  onClick={() => setActiveTab("tailwindConfig")}
                  className={`active:scale-95 duration-500 ${activeTab === "tailwindConfig"
                    ? "text-primary-foreground bg-primary"
                    : ""
                    } w-28`}
                  variant="outline"
                >
                  Tailwind.config.ts
                </Button>
              </div>
              <ClipBoardContainer>
                <ClipBoardHeader>
                  <ClipBoardLabel>
                    Copiar {activeTab === "globalcss" ? "CSS" : "Tailwind Config"}
                  </ClipBoardLabel>
                  <ClipBoardAction
                    copyText={
                      activeTab === "globalcss"
                        ? generateCodeCss(colors)
                        : generateTailwindConfig()
                    }
                  />
                </ClipBoardHeader>
                <ClipBoardArea>
                  <CodeBlock
                    code={
                      activeTab === "globalcss"
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