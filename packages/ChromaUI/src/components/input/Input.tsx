import React from 'react'
import { twMerge } from 'tailwind-merge'

const InputRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(
      'flex h-14 w-full items-center gap-3 rounded  border border-border/20 bg-input  p-4 focus-within:ring-1 focus-within:ring-ring',
      className
    )}
    {...props}
  />
))

InputRoot.displayName = 'InputRoot'

const InputIcon = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <i
    ref={ref}
    className={twMerge('text-muted-foreground', className)}
    {...props}
  />
))

InputIcon.displayName = 'InputIcon'

const Field = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={twMerge(
        'text-md flex-1 bg-transparent font-light text-muted-foreground outline-none placeholder:text-muted-foreground',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Field.displayName = 'Field'

export { Field, InputIcon, InputRoot }
