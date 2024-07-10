import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ForwardedRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { FaSpinner } from 'react-icons/fa6'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  animate?: 'default' | 'Swipe' | 'Shine'
  asChild?: boolean
  sizes?: 'default' | 'sm' | 'lg' | 'icon' | 'full'
  variant?:
    | 'primary'
    | 'secundary'
    | 'outline'
    | 'highlight'
    | 'disabled'
    | 'link'
    | 'danger'
    | 'warning'
    | 'none'
  ref?: ForwardedRef<HTMLButtonElement>
}

export function Button({
  className,
  isLoading = false,
  sizes = 'default',
  animate = 'default',
  variant = 'primary',
  asChild = false,
  ref,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-primary-900 text-secondary-50 hover:bg-primary-700',
    secundary: 'bg-secondary-50 text-primary-900 hover:bg-secondary-100',
    outline:
      'bg-transparent border border-primary-800 text-primary-950 hover:bg-primary-800 hover:text-secondary-50',
    highlight: 'text-zinc-50 hover:bg-violet-800 duration-300 bg-violet-900',
    disabled: 'bg-opacity-80 bg-zinc-900 border border-zinc-800 text-cyan-50',
    link: 'bg-transparent border-none underline-offset-4 hover:underline',
    danger: 'bg-red-700 hover:bg-red-600 text-zinc-50',
    warning: 'bg-yellow-400 text-zinc-900 hover:bg-yellow-300',
    none: '',
  }
  const sizeClasses = {
    default: 'h-10 px-4 py-2 w-28',
    sm: 'h-8 w-24  px-3 py-2 text-xs',
    lg: 'h-12 w-32  px-8 py-4',
    icon: 'h-9 w-9 p-1',
    full: 'h-10 px-4 py-2 w-full',
  }
  const animateClasses = {
    default: '',
    Shine:
      'before:ease relative  overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40',
    Swipe:
      'text-red-500 hover:before:bg-redborder-red-500 relative  overflow-hidden border border-red-500 bg-white text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full',
  }

  const _className = twMerge(
    variantClasses[variant],
    sizeClasses[sizes],
    animateClasses[animate],
    `appearance-none rounded-md  text-sm font-bold  transition-all duration-500 `,
    className,
  )
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      ref={ref}
      className={_className}
      {...props}
      disabled={isLoading || variant === 'disabled'}
    >
      {isLoading ? (
        <span className="flex items-center w-full gap-1">
          {props.children}
          <FaSpinner size={20} className="animate-spin text-zinc-50" />
        </span>
      ) : (
        <>{props.children}</>
      )}
    </Comp>
  )
}
