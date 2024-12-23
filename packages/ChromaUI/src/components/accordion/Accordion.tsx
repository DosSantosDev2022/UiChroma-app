'use client'

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
  useEffect
} from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

interface AccordionContextProps {
  isOpen: boolean
  toggleOpen: () => void
}

const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined
)

const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error(
      'Accordion components must be used within a Accordion provider'
    )
  }
  return context
}

const AccordionProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen((prev) => !prev)

  return (
    <AccordionContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </AccordionContext.Provider>
  )
}

const AccordionContainer = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <AccordionProvider>
    <div {...props} className={twMerge('relative w-full space-y-1', className)}>
      {children}
    </div>
  </AccordionProvider>
)

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { toggleOpen, isOpen } = useAccordionContext()
  return (
    <button
      {...props}
      onClick={toggleOpen}
      aria-expanded={isOpen}
      className={twMerge(
        'flex h-16 w-full items-center justify-between gap-2 rounded-t-md border px-4 py-2 focus:outline-none',
        className
      )}
    >
      {children}
      <LuChevronDown
        className={`h-4 w-4 shrink-0 transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
  )
}

const AccordionContent = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { isOpen } = useAccordionContext()
  return (
    <div
      aria-hidden={!isOpen}
      {...props}
      className={twMerge(
        'overflow-hidden ',
        isOpen
          ? 'animate-accordion-down  max-h-screen '
          : 'animate-accordion-up max-h-0 ',
        className
      )}
    >
      <div className="px-4 py-2">{children}</div>
    </div>
  )
}

const AccordionQuestion = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={twMerge('text-base font-semibold text-zinc-700', className)}
    {...props}
  />
)
AccordionQuestion.displayName = 'AccordionQuestion'

const AccordionAnswer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={twMerge('text-start text-sm text-muted', className)}
    {...props}
  />
)
AccordionAnswer.displayName = 'AccordionAnswer'

export {
  AccordionAnswer,
  AccordionContainer,
  AccordionContent,
  AccordionContext,
  AccordionQuestion,
  AccordionTrigger
}
