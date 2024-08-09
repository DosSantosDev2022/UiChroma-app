'use client'
import React, { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

const AccordionRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={twMerge(
      'w-full rounded-t-lg space-y-1 bg-zinc-50 text-zinc-600 ',
      className,
    )}
  />
))
AccordionRoot.displayName = 'AccordionRoot'

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HtmlHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    {...props}
    className={twMerge(
      'h-16 w-full px-2 py-3 flex  items-center justify-between gap-2',
      className,
    )}
    ref={ref}
  />
))
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionQuestion = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    className={twMerge('w-full text-start text-base font-semibold ', className)}
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
    className={twMerge(
      ' overflow-hidden text-start text-sm font-normal',
      className,
    )}
    {...props}
    ref={ref}
  />
))
AccordionAnswer.displayName = 'AccordionAnswer'

// Componente montado

interface AccordionProps {
  question: string // recebe as questões
  answer: string // recebe as respostas
}

export function Accordion({ answer, question }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => setIsOpen(!isOpen)

  return (
    <AccordionRoot>
      <AccordionTrigger
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        role="button"
        tabIndex={0}
        onClick={toggleAccordion}
      >
        <AccordionQuestion>{question}</AccordionQuestion>
        <LuChevronDown
          className={`transform transition-transform duration-500 ${
            isOpen ? 'rotate-90' : ''
          }`}
          size={20}
        />
      </AccordionTrigger>
      <div
        id="accordion-content"
        className={`overflow-hidden  font-normal transition-[max-height] duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100 px-2 py-3' : 'max-h-0 opacity-0'
        }`}
        style={{ transitionProperty: 'max-height, opacity' }}
      >
        <AccordionAnswer>{answer}</AccordionAnswer>
      </div>
    </AccordionRoot>
  )
}
