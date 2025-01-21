'use client'
import React, { ComponentPropsWithRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Navigation = forwardRef<HTMLElement, ComponentPropsWithRef<'nav'>>(
  ({ className, ...props }, ref) => (
    <nav
      className={twMerge(
        'h-full w-full space-y-1',
        'sm:space-y-2 lg:space-y-4',
        className
      )}
      {...props}
      ref={ref}
    />
  )
)

Navigation.displayName = 'Navigation'

const NavigationGroup = forwardRef<
  HTMLDivElement,
  ComponentPropsWithRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={twMerge(
      'custom-scrollbar overflow-x-auto sm:overflow-x-visible'
    )}
  />
))

NavigationGroup.displayName = 'NavigationGroup'

const NavigationList = forwardRef<
  HTMLUListElement,
  ComponentPropsWithRef<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    className={twMerge(
      'flex',
      'gap-2 sm:gap-4',
      'sm:flex-row sm:justify-start md:justify-center',
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
        'flex h-10 cursor-pointer items-center overflow-hidden rounded-md px-2 py-1.5',
        'sm:h-12 sm:min-w-24',
        'transition-colors duration-300 hover:bg-muted-hover',
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
          `flex w-full items-center justify-start gap-2  text-sm font-semibold text-muted-foreground
           `,
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </a>
    )
  }
)

NavigationLink.displayName = 'NavigationLink'

const NavigationIcon = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithRef<'span'>
>(({ className, ...props }, ref) => (
  <span className={twMerge('text-muted', className)} {...props} ref={ref} />
))

NavigationIcon.displayName = 'NavigationIcon'

export {
  Navigation,
  NavigationGroup,
  NavigationIcon,
  NavigationItem,
  NavigationLink,
  NavigationList
}
