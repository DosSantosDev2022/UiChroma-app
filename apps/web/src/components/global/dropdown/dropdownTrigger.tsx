import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface DropDownTriggerProps {
  children?: ReactNode
  className?: string
}

export function DropDownTrigger({ children, className }: DropDownTriggerProps) {
  return (
    <summary
      className={twMerge(
        `flex w-full cursor-pointer items-center justify-start gap-4 rounded-lg px-4 py-2 text-secondary-50 hover:bg-primary-800`,
        className,
      )}
    >
      {children}
    </summary>
  )
}
