import * as React from 'react'
import { createContext, ReactNode, useContext, useState } from 'react'
import { LuX } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

interface ModalContextProps {
  isOpen: boolean
  toggleOpen: () => void
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('Modal components must be used withim a Modal provider')
  }
  return context
}

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen((prev) => !prev)

  return (
    <ModalContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </ModalContext.Provider>
  )
}

const ModalRoot = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={twMerge('relative', className)} {...props} />
)

ModalRoot.displayName = 'ModalRoot'

const ModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={twMerge(
      'flex w-full items-center justify-between space-y-1.5 px-1 py-1.5',
      className
    )}
    {...props}
  />
)

ModalHeader.displayName = 'ModalHeader'

const ModalTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4
    className={twMerge(
      'text-xl font-semibold leading-none tracking-tight text-foreground',
      className
    )}
    {...props}
  />
)

ModalTitle.displayName = 'ModalTitle'

const ModalDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={twMerge('text-base text-muted-foreground', className)}
    {...props}
  />
)

ModalDescription.displayName = 'ModalDescription'

const ModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={twMerge(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
)
ModalFooter.displayName = 'ModalFooter'

const ModalOverlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isOpen } = useModalContext()
  if (!isOpen) return null
  return (
    <div
      className={twMerge(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

ModalOverlay.displayName = 'ModalOverlay'

const ModalTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { toggleOpen } = useModalContext()
  return (
    <button
      value={'text'}
      onClick={toggleOpen}
      className={twMerge(
        ' flex h-10 w-full items-center justify-center gap-2 rounded-md border bg-primary px-2 py-1.5 text-sm text-primary-foreground ring-offset-primary duration-300 hover:bg-primary-hover focus:ring-ring active:scale-95',
        className
      )}
      {...props}
      ref={ref}
    />
  )
})

ModalTrigger.displayName = 'ModalTrigger'

const ModalClose = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { toggleOpen } = useModalContext()
  return (
    <button
      value={'text'}
      onClick={toggleOpen}
      className={twMerge(
        'flex h-8 w-8 items-center justify-between rounded-md bg-primary p-2 text-primary-foreground hover:bg-primary-hover',
        className
      )}
      {...props}
      ref={ref}
    >
      <LuX size={16} />
    </button>
  )
})
ModalClose.displayName = 'ModalClose'

const ModalContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isOpen } = useModalContext()

  return (
    isOpen && (
      <div
        className={twMerge(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-3xl translate-x-[-50%] translate-y-[-50%] space-y-2 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  )
})

ModalContent.displayName = 'ModalContent'

export {
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProvider,
  ModalRoot,
  ModalTitle,
  ModalTrigger
}
