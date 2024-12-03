import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface TitleProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: ReactNode,
  className?: string
}

export function Title({children, as = 'h1',className}: TitleProps) {
  const Tag = as
  return (
    <Tag 
    className={twMerge('font-extrabold text-4xl text-foreground',
      className)}
    >{children}</Tag>
  )
}