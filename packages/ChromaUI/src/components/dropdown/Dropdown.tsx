'use client'
import React, {
  createContext,
  ElementRef,
  ReactNode,
  useContext,
  useState
} from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from '../button/Button'

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
    <div
      {...props}
      className={twMerge('relative h-full', className)}
      ref={ref}
    />
  </DropDownProvider>
))

DropDownRoot.displayName = 'DropDownRoot'

const DropDownGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={twMerge('', className)} />
))

DropDownGroup.displayName = 'DropDownGroup'

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
        'flex  w-full items-center justify-center gap-1 rounded border px-2 py-1.5',
        'transition-all duration-300',
        'bg-background text-primary hover:bg-muted-hover',
        'select-none outline-none focus:bg-muted-hover focus:ring-1 focus:ring-muted focus:ring-offset-1',
        className
      )}
      ref={ref}
    />
  )
})

DropDownTrigger.displayName = 'DropDownTrigger'

interface DropDownContentProps extends React.ComponentPropsWithRef<'div'> {
  position?: 'absolute' | 'sticky'
  alignment?:
  | 'top'
  | 'bottom'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
}

const DropDownContent = React.forwardRef<HTMLDivElement, DropDownContentProps>(
  (
    { className, position = 'absolute', alignment = 'bottom', ...props },
    ref
  ) => {
    const { isOpen } = useDropDownContext()

    const alignmentClasses = {
      top: 'bottom-full',
      bottom: 'top-full',
      'top-left': 'bottom-0 right-full mr-1',
      'top-right': 'bottom-0 left-full ml-1',
      'bottom-left': 'top-0 right-full mr-1',
      'bottom-right': 'top-0 left-full ml-1'
    }
    return (
      isOpen && (
        <div
          data-state={isOpen ? 'open' : 'closed'}
          {...props}
          className={twMerge(
            `${position} ${alignmentClasses[alignment]} mt-1 w-full rounded-md  border bg-background px-2 py-1.5 sm:w-full`,
            ' custom-scrollbar overflow-y-scroll shadow-md',
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
    className={twMerge('flex flex-col space-y-1', className)}
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
      'cursor-pointer px-2 py-1.5 hover:bg-muted-hover focus:ring-2 focus:ring-primary focus:ring-offset-2',
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
          'border-b-2 pb-1 pt-1 text-start text-sm font-semibold text-muted-foreground ',
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
          'flex w-full items-center justify-start gap-1.5 text-sm font-semibold text-primary',
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

const DropDownButton = React.forwardRef<
  ElementRef<typeof Button>,
  React.ComponentPropsWithRef<typeof Button>
>(({ className, ...props }, ref) => {
  return <Button className={twMerge('', className)} {...props} ref={ref} />
})

DropDownButton.displayName = 'DropDownButton'

const DropDownIcon = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithRef<'i'>
>(({ className, ...props }, ref) => {
  return (
    <i className={twMerge('text-primary', className)} {...props} ref={ref} />
  )
})

DropDownIcon.displayName = 'DropDownIcon'

export {
  DropDownButton,
  DropDownContent,
  DropDownGroup,
  DropDownIcon,
  DropDownItem,
  DropDownLabel,
  DropDownLink,
  DropDownList,
  DropDownProvider,
  DropDownRoot,
  DropDownTrigger
}

