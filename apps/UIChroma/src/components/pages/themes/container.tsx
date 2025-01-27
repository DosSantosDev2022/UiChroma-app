import { Title } from '@/components/global/title'
import { ReactNode } from 'react'

interface ContainerPreviewProps {
  children: ReactNode
  title?: string
}

const ContainerPreview = ({ children, title }: ContainerPreviewProps) => {
  return (
    <div
      className={
        'flex w-full flex-col items-start justify-center gap-3 rounded-md border px-6 py-4 dark:border-border'
      }
    >
      <Title
        className="ml-1.5 text-base font-medium text-muted-foreground"
        as="h4"
      >
        {title}
      </Title>
      <div className="flex w-full grow flex-col items-center justify-center px-2 py-3">
        {children}
      </div>
    </div>
  )
}

export { ContainerPreview }
