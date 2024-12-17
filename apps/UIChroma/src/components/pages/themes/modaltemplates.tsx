import { templateTailwindColors } from '@/enums/colors'
import { useThemeStore } from '@/store/useThemeStore'
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

const ModalTemplates = () => {
  const { handleBaseColorChange } = useThemeStore()
  return (
    <>
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
              Escolha uma cor base para gerar seu tema baseando-se nas cores do
              Tailwind css:
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
    </>
  )
}

export { ModalTemplates }
