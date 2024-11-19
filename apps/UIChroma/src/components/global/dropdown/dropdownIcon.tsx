import { ReactNode } from 'react'

interface DropDownIconProps {
  children: ReactNode
}

export function DropDownIcon({ children }: DropDownIconProps) {
  return <span>{children} </span>
}
