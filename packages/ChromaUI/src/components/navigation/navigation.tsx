'use client'
import React, { ComponentPropsWithRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const NavigationRoot = forwardRef<HTMLElement, ComponentPropsWithRef<'nav'>>(
  ({ className, ...props }, ref) => (
    <nav className={twMerge('w-full', className)} {...props} ref={ref} />
  ),
)

NavigationRoot.displayName = 'NavigationRoot'

const NavigationList = forwardRef<
  HTMLUListElement,
  ComponentPropsWithRef<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    className={twMerge(
      'space-y-4  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-foreground',
      className,
    )}
    {...props}
    ref={ref}
  />
))

NavigationList.displayName = 'NavigationList'

const NavigationItem = forwardRef<HTMLLIElement, ComponentPropsWithRef<'li'>>(
  ({ className, ...props }, ref) => (
    <li
      className={twMerge(
        'cursor-pointer h-10 flex items-center w-full  px-2 py-1.5 hover:bg-foreground/10 animation-hover',
        className,
      )}
      {...props}
      ref={ref}
    />
  ),
)

NavigationItem.displayName = 'NavigationItem'

interface NavigationLinkProps extends ComponentPropsWithRef<'a'> {
  url: string
}

const NavigationLink = forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  ({ className, url, ...props }, ref) => (
    <a
      className={twMerge(
        `flex w-full items-center justify-start gap-2  text-sm font-semibold text-background-foreground
         `,
        className,
      )}
      {...props}
      ref={ref}
      href={url}
    />
  ),
)

NavigationLink.displayName = 'NavigationLink'

const NavigationIcon = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithRef<'span'>
>(({ className, ...props }, ref) => (
  <span className={twMerge('', className)} {...props} ref={ref} />
))

NavigationIcon.displayName = 'NavigationIcon'

export {
  NavigationIcon,
  NavigationItem,
  NavigationLink,
  NavigationList,
  NavigationRoot
}

