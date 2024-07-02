import Link from 'next/link'
import { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

interface NavigationLinksProps {
  children: ReactNode
  url: string
  className?: string
  icon?: ReactNode
}

export function NavigationLinks({
  children,
  url,
  icon,
  className,
}: NavigationLinksProps) {
  return (
    <Link
      href={url}
      className={twMerge(
        'flex w-full items-center justify-start gap-4 rounded-lg   py-2 text-sm font-medium text-secondary-50 duration-200 hover:bg-primary-800  ',
        className,
      )}
    >
      <span>{icon} </span>
      {children}
    </Link>
  )
}
