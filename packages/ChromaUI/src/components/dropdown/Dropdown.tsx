'use client'
import React, { createContext, ReactNode, useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface DropDownContextProps {
  isOpen: boolean
  toggleOpen: () => void
}

const DropDownContext = createContext<DropDownContextProps | undefined>(
  undefined
)

const useDropDownContext = () => {
  const context = useContext(DropDownContext)
  if (!context) {
    throw new Error(
      'DropDown components must be used within a DropDown provider'
    )
  }
  return context
}

const DropDownProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen((prev) => !prev)

  return (
    <DropDownContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </DropDownContext.Provider>
  )
}

const DropDownRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'>
>(({ className, ...props }, ref) => (
  <DropDownProvider>
    <div {...props} className={twMerge('relative', className)} ref={ref} />
  </DropDownProvider>
))

DropDownRoot.displayName = 'DropDownRoot'

const DropDownTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<'button'>
>(({ className, ...props }, ref) => {
  const { toggleOpen, isOpen } = useDropDownContext()
  return (
    <button
      onClick={toggleOpen}
      aria-expanded={isOpen}
      {...props}
      className={twMerge(
        'flex h-10 w-full items-center justify-start gap-1 rounded border border-border px-2 py-1.5',
        'transition-all duration-300',
        'bg-background text-foreground hover:bg-muted-hover',
        'select-none outline-none focus:bg-muted-hover',
        className
      )}
      ref={ref}
    />
  )
})

DropDownTrigger.displayName = 'DropDownTrigger'

interface DropDownContentProps extends React.ComponentPropsWithRef<'div'> {
  position?: 'absolute' | 'sticky'
}

const DropDownContent = React.forwardRef<HTMLDivElement, DropDownContentProps>(
  ({ className, position = 'absolute', ...props }, ref) => {
    const { isOpen } = useDropDownContext()
    return (
      isOpen && (
        <div
          data-state={isOpen ? 'open' : 'closed'}
          {...props}
          className={twMerge(
            `${position} mt-1 w-full min-w-[8rem] rounded-md border border-border bg-background`,
            `data-[state=open]:animate-smooth-fadein`,
            `data-[state=closed]:animate-smooth-fadeout`,
            className
          )}
          ref={ref}
        />
      )
    )
  }
)

DropDownContent.displayName = 'DropDownContent'

const DropDownList = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithRef<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    {...props}
    className={twMerge(
      'custom-scrollbar flex flex-col gap-1 space-y-1 overflow-y-scroll px-2 py-1.5',
      className
    )}
    ref={ref}
  />
))

DropDownList.displayName = 'DropDownList'

const DropDownItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    {...props}
    className={twMerge(
      'cursor-pointer px-2 py-1.5 hover:bg-muted-hover',
      className
    )}
    ref={ref}
  />
))

DropDownItem.displayName = 'DropDownItem'

const DropDownLabel = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithRef<'label'>
>(({ className, ...props }, ref) => {
  return (
    <div className="w-full p-2">
      <label
        className={twMerge(
          'ml-1.5 text-sm font-semibold text-muted-foreground',
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
})

DropDownLabel.displayName = 'DropDownLabel'

interface DropDownLinkProps extends React.ComponentPropsWithRef<'a'> {
  asChild?: boolean
}

const DropDownLink = React.forwardRef<HTMLAnchorElement, DropDownLinkProps>(
  ({ className, asChild, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement, {
        ...props,
        ref
      })
    }

    return (
      <a
        className={twMerge(
          'flex w-full items-center justify-start gap-2 text-sm font-semibold text-foreground',
          className
        )}
        {...props}
        ref={ref}
        children={children}
      />
    )
  }
)

DropDownLink.displayName = 'DropDownLink'

const DropDownIcon = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithRef<'i'>
>(({ className, ...props }, ref) => {
  return (
    <i className={twMerge('text-foreground', className)} {...props} ref={ref} />
  )
})

DropDownIcon.displayName = 'DropDownIcon'

export {
  DropDownContent,
  DropDownIcon,
  DropDownItem,
  DropDownLabel,
  DropDownLink,
  DropDownList,
  DropDownProvider,
  DropDownRoot,
  DropDownTrigger
}
