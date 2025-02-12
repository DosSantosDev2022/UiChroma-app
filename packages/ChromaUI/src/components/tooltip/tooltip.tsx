'use client'

import React, { createContext, ReactNode, useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'

// Contexto para gerenciar estado do Tooltip
const TooltipContext = createContext({
  isOpen: false,
  setIsOpen: (_: boolean) => {}
})

export function TooltipProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <TooltipContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </TooltipContext.Provider>
  )
}

// Tooltip Root
export function Tooltip({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <TooltipContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </TooltipContext.Provider>
  )
}

// Tooltip Trigger
export function TooltipTrigger({ children }: { children: ReactNode }) {
  const { setIsOpen } = useContext(TooltipContext)

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children}
    </div>
  )
}

// Tooltip Content
export const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { isOpen } = useContext(TooltipContext)

  return isOpen ? (
    <div
      ref={ref}
      className={twMerge(
        'animate-in fade-in-0 zoom-in-95 absolute z-50 overflow-hidden rounded-md border bg-gray-800 px-3 py-1.5 text-sm text-white shadow-md transition-all',
        'left-1/2 top-full mt-2 -translate-x-1/2 transform',
        className
      )}
      {...props}
    >
      {children}
    </div>
  ) : null
})
TooltipContent.displayName = 'TooltipContent'
