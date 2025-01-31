import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TitleProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  className?: string
}

const Title = ({ children, as = 'h1', className }: TitleProps) => {
  const Tag = as
  return (
    <Tag
      className={twMerge('text-4xl font-extrabold tracking-wide', className)}
    >
      {children}
    </Tag>
  )
}

export { Title }
