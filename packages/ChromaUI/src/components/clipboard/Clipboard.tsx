'use client'
import React, { useState } from 'react'
import { FaCheckCircle, FaCopy } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

interface ClipBoardProps {
  copyText: string
  className?: string
}

const ClipBoardAction = React.forwardRef<HTMLButtonElement, ClipBoardProps>(
  ({ copyText, className, ...props }, ref) => {
    const [copy, setCopy] = useState(false)

    const handleCopyCode = () => {
      navigator.clipboard.writeText(copyText)
      setCopy(true)

      setTimeout(() => {
        setCopy(false)
      }, 3000)
    }
    return (
      <button
        className={twMerge(
          'flex items-center gap-2  rounded-md p-1.5 transition-all duration-300 bg-muted-foreground text-muted hover:bg-muted-hover hover:text-muted-foreground',
          className,
        )}
        ref={ref}
        onClick={handleCopyCode}
        {...props}
      >
        {copy ? (
          <FaCheckCircle size={14} />
        ) : (
          <FaCopy size={14} />
        )}
      </button>
    )
  },
)
ClipBoardAction.displayName = 'ClipBoardAction'

const ClipBoardContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div className={twMerge('w-full', className)} {...props} ref={ref} />
})
ClipBoardContainer.displayName = 'ClipBoardContainer'

const ClipBoardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={twMerge(
        `flex h-12 w-full items-center justify-between rounded-md bg-foreground/95 px-2 py-3`,
        className,
      )}
    />
  )
})
ClipBoardHeader.displayName = 'ClipBoardHeader'

const ClipBoardLabel = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h6
      {...props}
      ref={ref}
      className={twMerge('text-base font-normal text-muted', className)}
    />
  )
})
ClipBoardLabel.displayName = 'ClipBoardLabel'

const ClipBoardArea = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={twMerge(
        'from h-full w-full bg-foreground/95 rounded-md',
        className,
      )}
    />
  )
})
ClipBoardArea.displayName = 'ClipBoardArea'

export {
  ClipBoardAction, ClipBoardArea, ClipBoardContainer, ClipBoardHeader, ClipBoardLabel
}

