import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const TextArea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      {...props}
      ref={ref}
      className={twMerge(
        'border-border/20 w-full rounded border bg-muted px-3 py-4 font-light text-muted-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring',
        className
      )}
    />
  )
})
TextArea.displayName = 'textArea'

export { TextArea }
