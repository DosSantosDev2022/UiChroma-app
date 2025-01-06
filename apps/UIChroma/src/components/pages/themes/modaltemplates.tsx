import { templateTailwindColors } from '@/enums/colors'
import { useThemeStore } from '@/store/useThemeStore'
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

const ModalTemplates = () => {
  const { selectedColor, setSelectedColor, handleBaseColorChange } =
    useThemeStore()

  const handleColorClick = (color: string) => {
    setSelectedColor(color)
    handleBaseColorChange(color)
  }

  return (
    <>
      <ModalRoot>
        <ModalTrigger className="h-12 w-28 rounded-lg">Templates</ModalTrigger>
        <ModalOverlay variant="blur" />
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
                onClick={() => handleColorClick(color.value)}
                style={{ backgroundColor: color.value }}
                className={`
                   relative h-8 w-8 rounded-lg border duration-300 active:scale-75
                  `}
                title={color.label}
              >
                {selectedColor === color.value && (
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
