'use client'
import React, {
  createContext,
  ElementRef,
  ReactNode,
  useContext,
  useState
} from 'react'
import { TbLayoutSidebarLeftExpandFilled } from 'react-icons/tb'
import { twMerge } from 'tailwind-merge'
import { Button } from '../button/Button'

// Contextos de Sidebar e Dropdown
interface SideBarContextProps {
  isOpenSideBar: boolean
  toggle: () => void
}

interface DropDownContextProps {
  isOpenDropDown: boolean
  toggle: () => void
}

const SideBarContext = createContext<SideBarContextProps | undefined>(undefined)
const DropDownContext = createContext<DropDownContextProps | undefined>(
  undefined
)

const useSideBarContext = () => {
  const context = useContext(SideBarContext)
  if (!context) {
    throw new Error('useSideBarContext must be used within a SideBarProvider')
  }
  return context
}

const useDropDownContext = () => {
  const context = useContext(DropDownContext)
  if (!context) {
    throw new Error('useDropDownContext must be used within a DropDownProvider')
  }
  return context
}

// Providers para Sidebar e Dropdown
const SideBarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenSideBar, setIsOpen] = useState(true)
  const toggle = () => setIsOpen((prev) => !prev)
  return (
    <SideBarContext.Provider value={{ isOpenSideBar, toggle }}>
      {children}
    </SideBarContext.Provider>
  )
}

const DropDownProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenDropDown, setIsOpen] = useState(false)
  const toggle = () => setIsOpen((prev) => !prev)
  return (
    <DropDownContext.Provider value={{ isOpenDropDown, toggle }}>
      {children}
    </DropDownContext.Provider>
  )
}

const SideBarRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'>
>(({ className, ...props }, ref) => (
  <SideBarProvider>
    <div ref={ref} {...props} />
  </SideBarProvider>
))

const SideBar = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithRef<'aside'>
>(({ className, ...props }, ref) => {
  const { isOpenSideBar } = useSideBarContext()
  return (
    <aside
      aria-label="sidebar"
      data-sidebar="aside"
      ref={ref}
      {...props}
      className={twMerge(
        'col-start-1 row-span-2 flex h-full flex-col justify-between border bg-background p-4',
        '',
        isOpenSideBar
          ? 'w-64 translate-x-0 animate-expand-dimensions'
          : '-translate-x-full sm:w-20 sm:translate-x-0',
        className
      )}
    />
  )
})

SideBar.displayName = 'SideBar'

const SideBarTrigger = React.forwardRef<
  ElementRef<typeof Button>,
  React.ComponentPropsWithRef<typeof Button>
>(({ className, ...props }, ref) => {
  const { toggle, isOpenSideBar } = useSideBarContext()
  return (
    <Button
      variants="ghost"
      sizes="icon"
      onClick={toggle}
      aria-expanded={isOpenSideBar}
      {...props}
      className={twMerge('absolute -right-6 top-2 z-20 p-1', className)}
      ref={ref}
    >
      <TbLayoutSidebarLeftExpandFilled size={24} />
    </Button>
  )
})

SideBarTrigger.displayName = 'SideBarTrigger'

const SideBarLogo = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'> & { label?: string; icon?: ReactNode }
>(({ className, label, icon, ...props }, ref) => {
  const { isOpenSideBar } = useSideBarContext()
  return (
    <div
      ref={ref}
      {...props}
      className={twMerge('flex items-center justify-start gap-2', className)}
    >
      {icon}
      {isOpenSideBar && (
        <span className="ml-1 text-xl font-extrabold text-primary">
          {label}
        </span>
      )}
    </div>
  )
})

SideBarLogo.displayName = 'SideBarLogo'

const SideBarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'> & { trigger?: boolean }
>(({ className, trigger = false, ...props }, ref) => {
  return (
    <div
      data-sidebar="Header"
      {...props}
      className={twMerge(
        'relative mb-10 flex w-full items-center justify-between gap-4 p-2',
        className
      )}
      ref={ref}
    >
      {trigger && <SideBarTrigger />}
      {props.children}
    </div>
  )
})

SideBarHeader.displayName = 'SideBarHeader'

const SideBarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      data-sidebar="Content"
      {...props}
      ref={ref}
      className={twMerge(
        'custom-scrollbar overflow-y-auto" flex min-h-0 flex-1 flex-col',
        className
      )}
    />
  )
})

SideBarContent.displayName = 'SideBarContent'

const SideBarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'>
>(({ className, ...props }, ref) => {
  const { isOpenSideBar } = useSideBarContext()
  return (
    <div
      data-sidebar="Footer"
      ref={ref}
      {...props}
      className={twMerge(
        `${isOpenSideBar ? 'flex w-full flex-col items-center p-2 text-center text-xs font-light tracking-wide text-muted' : 'hidden'}`,
        '',
        className
      )}
    />
  )
})

SideBarFooter.displayName = 'SideBarFooter'

const SideBarSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    data-sidebar="separator"
    ref={ref}
    {...props}
    className={twMerge('mx-2 w-auto bg-border', className)}
  />
))

SideBarSeparator.displayName = 'SideBarSeparator'

const SideBarNavigation = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithRef<'nav'>
>(({ className, ...props }, ref) => {
  return (
    <nav ref={ref} {...props} className={twMerge('space-y-1', className)} />
  )
})

SideBarNavigation.displayName = 'SideBarNavigation'

//  Navegação links
const SideBarList = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithRef<'ul'>
>(({ className, children, ...props }, ref) => {
  return (
    <ul ref={ref} {...props} className={twMerge('space-y-1', className)}>
      {children}
    </ul>
  )
})
SideBarList.displayName = 'SideBarList'

const SideBarItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithRef<'li'> & { icon?: ReactNode }
>(({ className, children, icon, ...props }, ref) => {
  const { isOpenSideBar } = useSideBarContext()
  return (
    <li
      ref={ref}
      {...props}
      className={twMerge(
        'mt-1 cursor-pointer list-none rounded-md px-1.5 py-2 text-sm text-primary hover:bg-muted-hover',
        'flex items-center  gap-2',
        `${isOpenSideBar ? 'justify-start' : 'justify-center'}`,
        className
      )}
    >
      {icon}
      {isOpenSideBar && <span>{children}</span>}
    </li>
  )
})
SideBarItem.displayName = 'SideBarItem'

// Navegação Dropdown
const SideBarDropRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'>
>(({ className, ...props }, ref) => {
  return (
    <DropDownProvider>
      <div
        ref={ref}
        {...props}
        className={twMerge('mt-1 space-y-1', className)}
      />
    </DropDownProvider>
  )
})

SideBarDropRoot.displayName = 'SideBarDropRoot'

const SideBarDropTrigger = React.forwardRef<
  ElementRef<typeof Button>,
  React.ComponentPropsWithRef<typeof Button> & { icon?: ReactNode }
>(({ className, icon, ...props }, ref) => {
  const { isOpenSideBar } = useSideBarContext()
  const { toggle } = useDropDownContext()
  return (
    <Button
      variants="ghost"
      onClick={toggle}
      ref={ref}
      {...props}
      className={twMerge(
        'h-9 w-full ',
        `${isOpenSideBar ? 'justify-start' : ''}`,
        className
      )}
    >
      {icon}
      {isOpenSideBar && <span> {props.children}</span>}
    </Button>
  )
})
SideBarDropTrigger.displayName = 'SideBarDropTrigger'

const SideBarDropContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'>
>(({ className, children, ...props }, ref) => {
  const { isOpenDropDown } = useDropDownContext()
  const { isOpenSideBar } = useSideBarContext()
  return (
    isOpenDropDown && (
      <div
        ref={ref}
        {...props}
        className={twMerge(
          ' flex flex-col space-y-1 rounded-md border bg-background p-1 opacity-0',
          isOpenSideBar ? '' : 'absolute -right-full',
          isOpenDropDown
            ? 'custom-scrollbar max-h-60  animate-smooth-fadein overflow-auto opacity-100'
            : ' max-h-0',
          'transition-all duration-300',
          className
        )}
      >
        {children}
      </div>
    )
  )
})
SideBarDropContent.displayName = 'SideBarDropContent'

const SideBarDropList = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithRef<'ul'>
>(({ className, children, ...props }, ref) => {
  return (
    <ul ref={ref} {...props} className={twMerge('mt-1', className)}>
      {children}
    </ul>
  )
})
SideBarDropList.displayName = 'SideBarDropList'

const SideBarDropItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithRef<'li'>
>(({ className, children, ...props }, ref) => {
  return (
    <li
      ref={ref}
      {...props}
      className={twMerge(
        'cursor-pointer list-none rounded-md px-1.5 py-2 text-sm text-primary hover:bg-muted-hover',
        className
      )}
    >
      {children}
    </li>
  )
})
SideBarDropItem.displayName = 'SideBarDropItem'

export {
  SideBar,
  SideBarContent,
  SideBarDropContent,
  SideBarDropItem,
  SideBarDropList,
  SideBarDropRoot,
  SideBarDropTrigger,
  SideBarFooter,
  SideBarHeader,
  SideBarItem,
  SideBarList,
  SideBarLogo,
  SideBarNavigation,
  SideBarRoot,
  SideBarSeparator,
  SideBarTrigger
}

