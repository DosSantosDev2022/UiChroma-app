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

const DropDownContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div {...props} className={twMerge('relative', className)} ref={ref} />
))

DropDownContainer.displayName = 'DropDownContainer'

const DropDownTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { toggleOpen } = useDropDownContext()
  return (
    <button
      onClick={toggleOpen}
      {...props}
      className={twMerge(
        'animation-hover flex h-10 w-full items-center justify-start gap-1 rounded border bg-background px-2 py-1.5 text-foreground hover:bg-foreground/10  ',
        className
      )}
      ref={ref}
    />
  )
})

DropDownTrigger.displayName = 'DropDownTrigger'

interface DropDownContentProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: 'absolute' | 'relative' | 'fixed' | 'static' | 'sticky'
}

const DropDownContent = React.forwardRef<HTMLDivElement, DropDownContentProps>(
  ({ className, position = 'absolute', ...props }, ref) => {
    const { isOpen } = useDropDownContext()
    return (
      isOpen && (
        <div
          {...props}
          className={twMerge(
            `${position} mt-1 w-full rounded-md border  bg-background`,
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
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    {...props}
    className={twMerge(
      'custom-scrollbar mt-2 flex flex-col gap-1 space-y-1 overflow-y-scroll px-4',
      className
    )}
    ref={ref}
  />
))

DropDownList.displayName = 'DropDownList'

const DropDownItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    {...props}
    className={twMerge(
      'animation-hover cursor-pointer px-2  py-1.5 hover:bg-foreground/10',
      className
    )}
    ref={ref}
  />
))

DropDownItem.displayName = 'DropDownItem'

const DropDownLabel = React.forwardRef<
  HTMLLabelElement,
  React.HTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  return (
    <label
      className={twMerge(
        ' text-background-foreground ml-1.5 border-b-border px-2 py-1.5 text-sm font-semibold',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

DropDownLabel.displayName = 'DropDownLabel'

interface DropDownLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean
}

const DropDownLink = React.forwardRef<HTMLAnchorElement, DropDownLinkProps>(
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
          'text-background-foreground flex w-full items-center justify-start  gap-2 text-sm font-semibold',
          className
        )}
        {...props}
        ref={ref}
      />
    )
  }
)

DropDownLink.displayName = 'DropDownLink'

const DropDownAction = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return <button className={twMerge('', className)} {...props} ref={ref} />
})

DropDownAction.displayName = 'DropDownAction'

const DropDownIcon = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <i
      className={twMerge(
        'text-background-foreground flex h-6 w-6 items-center justify-center',
        className
      )}
      {...props}
      ref={ref}
    />
  )
})

DropDownIcon.displayName = 'DropDownIcon'

export {
  DropDownAction,
  DropDownContainer,
  DropDownContent,
  DropDownIcon,
  DropDownItem,
  DropDownLabel,
  DropDownLink,
  DropDownList,
  DropDownProvider,
  DropDownTrigger
}
