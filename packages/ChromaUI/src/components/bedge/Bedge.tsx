import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface BadgeProps extends ComponentProps<'span'> {
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'xs' | 'md' | 'lg' | 'xl' | 'full'
  children?: string
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'accent', size = 'xs', children, ...props }, ref) => {
    const variantClasses = {
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      accent: 'bg-accent text-accent-foreground'
    }
    const variantSizes = {
      xs: 'w-10',
      md: 'w-16',
      lg: 'w-24',
      xl: 'w-28',
      full: 'w-full'
    }

    return (
      <span
        className={twMerge(
          `inline-flex items-center justify-center rounded-full border px-2.5 py-1.5 text-xs font-semibold`,
          `transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`,
          variantClasses[variant],
          variantSizes[size],
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
