import { ReactNode } from 'react'

interface DropDownTriggerProps {
  children?: ReactNode
}

export function DropDownTrigger({ children }: DropDownTriggerProps) {
  return (
    <summary className="text-secondary-50 hover:bg-primary-800 flex w-full cursor-pointer items-center justify-start gap-4 rounded-lg px-4 py-2  ">
      {children}
    </summary>
  )
}
