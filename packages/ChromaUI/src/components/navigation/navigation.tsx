'use client'
import React, { ComponentPropsWithRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const NavigationRoot = forwardRef<HTMLElement, ComponentPropsWithRef<'nav'>>(
  ({ className, ...props }, ref) => (
    <nav className={twMerge('w-full', className)} {...props} ref={ref} />
  )
)

NavigationRoot.displayName = 'NavigationRoot'

const NavigationList = forwardRef<
  HTMLUListElement,
  ComponentPropsWithRef<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    className={twMerge(
      'space-y-4  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-foreground',
      className
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
        'animation-hover flex h-10 w-full cursor-pointer  items-center px-2 py-1.5 hover:bg-foreground/10',
        className
      )}
      {...props}
      ref={ref}
    />
  )
)

NavigationItem.displayName = 'NavigationItem'

interface NavigationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean
}

const NavigationLink = forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  ({ className, asChild, children, ...props }, ref) => {
    if (asChild) {
      return React.cloneElement(children as React.ReactElement, {
        ...props,
        ref
      })
    }

    return (
      <a
        className={twMerge(
          `flex w-full items-center justify-start gap-2  text-sm font-semibold text-foreground
           `,
          className
        )}
        {...props}
        ref={ref}
      />
    )
  }
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
