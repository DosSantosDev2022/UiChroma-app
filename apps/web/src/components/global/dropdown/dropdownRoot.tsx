import { ReactNode } from 'react'

interface DropDownRoot {
  children?: ReactNode
}

export function DropDownRoot({ children }: DropDownRoot) {
  return (
    <details className="group w-full [&_summary::-webkit-details-marker]:hidden">
      {children}
    </details>
  )
}
