import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ForwardedRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { FaSpinner } from 'react-icons/fa6'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  asChild?: boolean
  sizes?: 'xs' | 'sm' | 'lg' | 'icon' | 'full'
  variant?:
    | 'primary'
    | 'secundary'
    | 'outline'
    | 'highlight'
    | 'disabled'
    | 'link'
    | 'danger'
    | 'warning'
    | 'Shine'
    | 'Swipe'
  ref?: ForwardedRef<HTMLButtonElement>
}

const variantClasses = {
  primary: 'bg-primary-900 text-secondary-50 hover:bg-primary-700',
  secundary: 'bg-secondary-50 text-primary-900 hover:bg-secondary-200',
  outline:
    'bg-transparent border border-secundary text-light hover:bg-primary hover:bg-primary-700 hover:text-primary-50 ',
  highlight: 'text-zinc-50 hover:bg-violet-800 duration-300 bg-violet-900',
  disabled:
    'bg-opacity-80 bg-primary-950 border border-primary-800 text-secondary-50',
  link: 'bg-transparent border-none underline-offset-4 hover:underline',
  danger: 'bg-red-700 hover:bg-red-600 text-zinc-50',
  warning: 'bg-yellow-400 text-zinc-900 hover:bg-yellow-300',
  Shine:
    'before:ease relative  overflow-hidden border border-primary-800 bg-primary-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-primary-500 hover:before:-translate-x-40',
  Swipe:
    'text-zinc-50 hover:before:bg-redborder-red-500 relative  overflow-hidden border border-primary-500 bg-white text-primary-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary-500 before:transition-all before:duration-500 hover:text-white hover:shadow-primary-500 hover:before:left-0 hover:before:w-full',
}
const sizeClasses = {
  xs: 'h-10 w-20  text-xs',
  sm: 'h-12 w-24  text-sm',
  lg: 'h-14 w-28  text-lg',
  icon: 'h-9 w-9 p-1',
  full: 'h-10 w-full text-lg',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      isLoading = false,
      sizes = 'xs',
      variant = 'primary',
      asChild = false,
      ...props
    },
    ref,
  ) => {
    // Memoizando as classes para melhorar a performance
    const _className = React.useMemo(
      () =>
        twMerge(
          variantClasses[variant!],
          sizeClasses[sizes!],
          'appearance-none rounded-md px-3 py-2 flex gap-2 items-center justify-center font-normal transition-all duration-500',
          className,
        ),
      [className, sizes, variant],
    )

    // Definindo o componente a ser usado (Slot ou button)
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={_className}
        {...props}
        disabled={isLoading || variant === 'disabled'}
        aria-busy={isLoading}
        aria-live={isLoading ? 'polite' : undefined}
      >
        {isLoading ? (
          <>
            {props.children}
            <FaSpinner size={18} className="animate-spin text-zinc-50" />
          </>
        ) : (
          props.children
        )}
      </Comp>
    )
  },
)

Button.displayName = 'Button'
