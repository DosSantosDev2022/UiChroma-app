'use client'
import React, { createContext, ReactNode, useContext, useState } from 'react'
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

const AccordionContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={twMerge('relative w-full space-y-1', className)}
  />
))
AccordionContainer.displayName = 'AccordionContainer'

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HtmlHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { toggleOpen, isOpen } = useAccordionContext()
  return (
    <button
      {...props}
      onClick={toggleOpen}
      className={twMerge(
        'flex h-16 w-full cursor-pointer items-center justify-between gap-2 rounded-t-md border px-4 py-2 focus:outline-none',
        className
      )}
      ref={ref}
    >
      {props.children}
      <LuChevronDown
        className={`h-4 w-4 shrink-0 transition-transform duration-500 ease-in-out ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>
  )
})
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isOpen } = useAccordionContext()
  return (
    <div
      {...props}
      ref={ref}
      className={twMerge(
        'overflow-hidden transition-all duration-500 ease-in-out',
        isOpen ? 'max-h-screen animate-fade-in' : 'max-h-0 animate-fade-out',
        className
      )}
    >
      <div className="px-4 py-2">{props.children}</div>
    </div>
  )
})
AccordionContent.displayName = 'AccordionContent'

const AccordionQuestion = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    className={twMerge('text-base font-semibold text-zinc-700', className)}
    {...props}
    ref={ref}
  />
))
AccordionQuestion.displayName = 'AccordionQuestion'

const AccordionAnswer = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    className={twMerge('text-start text-sm text-zinc-600', className)}
    {...props}
    ref={ref}
  />
))
AccordionAnswer.displayName = 'AccordionAnswer'

export {
  AccordionAnswer,
  AccordionContainer,
  AccordionContent,
  AccordionContext,
  AccordionProvider,
  AccordionQuestion,
  AccordionTrigger
}
