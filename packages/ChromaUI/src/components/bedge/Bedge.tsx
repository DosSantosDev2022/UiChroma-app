import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface BadgeProps extends ComponentProps<'span'> {
  variant: 'primary' | 'secondary' | 'accent'
  children: string
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, children, ...props }, ref) => {
    const variantClasses = {
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      accent: 'bg-accent text-accent-foreground',
    }

    return (
      <span
        className={twMerge(
          `w-[65px] px-2 py-2-5 rounded-2xl text-neutral
          text-sm font-normal leading-7 flex items-center justify-center`,
          variantClasses[variant], // Aplica a classe de acordo com a variant
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </span>
    )
  },
)

Badge.displayName = 'Badge'
