import { Title } from '@/components/global/title/title'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContainerPreviewProps {
  children: ReactNode
  title?: string
  className?: string
}

export function ContainerPreview({
  children,
  title,
  className
}: ContainerPreviewProps) {
  return (
    <div
      className={twMerge(
        'flex w-full flex-col items-start justify-center  gap-3 rounded-md border bg-muted/20 px-6 py-4 shadow-sm',
        className
      )}
    >
      <Title
        className="ml-1.5 text-base font-medium text-muted-foreground"
        as="h4"
      >
        {title}
      </Title>
      <div className="flex w-full grow flex-col items-center justify-center border px-2 py-3">
        {children}
      </div>
    </div>
  )
}
