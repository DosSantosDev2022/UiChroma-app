import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.InputHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  return (
    <label
      className={twMerge(
        'text-sm font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Label.displayName = 'Label'
