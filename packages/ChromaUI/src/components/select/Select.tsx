'use client'

import React, { createContext, ReactNode, useContext, useState } from 'react'
import { RiArrowDownWideLine, RiArrowUpWideLine } from 'react-icons/ri'
import { twMerge } from 'tailwind-merge'

interface SelectContextProps {
  isOpen: boolean
  toggleOpen: () => void
  selectedOption: string
  // eslint-disable-next-line no-unused-vars
  selectOption: (option: string) => void
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined)

const useSelectContext = () => {
  const context = useContext(SelectContext)
  if (!context) {
    throw new Error('Select components must be used within a Select provider')
  }

  return context
}

const SelectProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Selecione')
  const toggleOpen = () => setIsOpen((prev) => !prev)

  const selectOption = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <SelectContext.Provider
      value={{ isOpen, toggleOpen, selectedOption, selectOption }}
    >
      {children}
    </SelectContext.Provider>
  )
}

const SelectRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div className={twMerge('', className)} {...props} ref={ref} />
})

SelectRoot.displayName = 'SelectRoot'

const SelectIcon = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <i
      className={twMerge(
        'flex h-10 w-10 items-center justify-center text-zinc-900',
        className
      )}
      {...props}
      ref={ref}
    />
  )
})

SelectIcon.displayName = 'SelectIcon'

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { toggleOpen, selectedOption, isOpen } = useSelectContext()
  return (
    <button
      value={'text'}
      onClick={toggleOpen}
      className={twMerge(
        ' bg-secondary-50 text-primary-950 ring-offset-primary-950 placeholder:text-primary-950 flex h-10 w-[368px] items-center justify-between rounded-md border px-3 py-2 text-sm focus:ring-ring ',
        className
      )}
      {...props}
      ref={ref}
    >
      {selectedOption}

      {isOpen ? (
        <SelectIcon>
          <RiArrowUpWideLine />
        </SelectIcon>
      ) : (
        <SelectIcon>
          <RiArrowDownWideLine />
        </SelectIcon>
      )}
    </button>
  )
})

SelectTrigger.displayName = 'SelectTrigger'

const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isOpen } = useSelectContext()

  return (
    isOpen && (
      <div
        className={twMerge('bg-secondary-50 mt-1 rounded-md', className)}
        {...props}
        ref={ref}
      />
    )
  )
})

SelectContent.displayName = 'SelectContent'

const SelectOption = React.forwardRef<
  HTMLOptionElement,
  React.HTMLAttributes<HTMLOptionElement>
>(({ className, children, ...props }, ref) => {
  const { selectOption } = useSelectContext()
  const optionLabel = children as string
  return (
    <option
      onClick={() => selectOption(optionLabel)}
      className={twMerge(
        'bg-secondary-50 text-primary-950 hover:bg-secondary-100 relative flex w-full cursor-pointer  items-center  py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
      ref={ref}
    >
      {children}{' '}
    </option>
  )
})

SelectOption.displayName = 'SelectOption'

export {
  SelectContent,
  SelectIcon,
  SelectOption,
  SelectProvider,
  SelectRoot,
  SelectTrigger
}
