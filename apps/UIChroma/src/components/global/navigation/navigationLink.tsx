'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  const pathName = usePathname()
  return (
    <Link
      href={url}
      className={twMerge(
        `flex w-full items-center justify-start gap-4 rounded-lg py-2 text-sm font-medium text-secondary-50 duration-200 hover:bg-primary-800 ${pathName === url ? 'active bg-primary-800' : ''}`,
        className,
      )}
    >
      <span>{icon}</span>
      {children}
    </Link>
  )
}
