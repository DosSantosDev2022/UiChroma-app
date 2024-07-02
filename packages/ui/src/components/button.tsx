import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ForwardedRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?:
    | 'primary'
    | 'secundary'
    | 'outline'
    | 'highlight'
    | 'disabled'
    | 'link'
    | 'danger'
    | 'warning'
  ref?: ForwardedRef<HTMLButtonElement>
}

export function Button({
  className,
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
    disabled: 'bg-zinc-800 border border-zinc-800 text-cyan-50',
    link: 'bg-transparent border-none underline-offset-4 hover:underline',
    danger: 'bg-red-700 hover:bg-red-600 text-zinc-50',
    warning: 'bg-yellow-400 text-zinc-900 hover:bg-yellow-300',
  }

  const _className = twMerge(
    variantClasses[variant],
    `appearance-none rounded-md py-2 w-[198px] h-10 px-3 text-sm font-bold  transition-all duration-500 `,
    className,
  )
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp ref={ref} className={_className} {...props}>
      {props.children}
    </Comp>
  )
}
