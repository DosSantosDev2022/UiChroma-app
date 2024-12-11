import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface BadgeProps extends ComponentProps<'span'> {
  variant?: 'primary' | 'secondary' | 'accent'
  children?: string
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'accent', children, ...props }, ref) => {
    const variantClasses = {
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      accent: 'bg-accent text-accent-foreground'
    }

    return (
      <span
        className={twMerge(
          `py-2-5 text-neutral flex w-[65px] items-center
          justify-center rounded-2xl px-2 text-sm font-normal leading-7`,
          variantClasses[variant], // Aplica a classe de acordo com a variant
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
