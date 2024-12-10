import * as React from 'react'
import { createContext, ReactNode, useContext, useState } from "react"
import { twMerge } from "tailwind-merge"

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


const ModalRoot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div
    className={twMerge('relative max-h-full w-full max-w-2xl p-4', className)}
    ref={ref}
    {...props}

  />
})

ModalRoot.displayName = 'ModalRoot'


const ModalOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className, ...props}, ref) => {
  const {isOpen} = useModalContext()
  if(!isOpen) return null
  return (
    <div
     className={twMerge('fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', className)}
     ref={ref}
     {...props}
    />
  )
})

ModalOverlay.displayName = "ModalOverlay"

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
        ' focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border bg-secondary-50 px-3 py-2 text-sm text-primary-950 ring-offset-primary-950 placeholder:text-primary-950 ',
        className,
      )}
      {...props}
      ref={ref}
    />
  )
})

ModalTrigger.displayName = "ModalTrigger"

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
        'hover:bg-primary-hover bg-primary text-primary-foreground h-9 w-9 appearance-none rounded-md px-3 py-2',
        className,
      )}
      {...props}
      ref={ref}
    />
  )
})
ModalClose.displayName = "ModalClose"


const ModalContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className, ...props}, ref) => {
  const {isOpen} = useModalContext()

  return (
    isOpen && (
      <div
       className={twMerge('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg', className)}
       ref={ref}
       {...props}
      />
    )
  )
})

ModalContent.displayName = "ModalContent"

export {
  ModalProvider,
  ModalRoot,
  ModalOverlay,
  ModalTrigger,
  ModalClose,
  ModalContent,
}