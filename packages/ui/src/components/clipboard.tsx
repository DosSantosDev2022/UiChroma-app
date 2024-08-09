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
          'flex items-center gap-2 rounded-md bg-zinc-800 p-1.5 text-zinc-50 transition-all duration-300  hover:bg-zinc-700',
          className,
        )}
        ref={ref}
        onClick={handleCopyCode}
        {...props}
      >
        {copy ? (
          <FaCheckCircle className="text-zinc-300" size={14} />
        ) : (
          <FaCopy className="text-zinc-300" size={14} />
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
        `flex h-12 w-full items-center justify-between rounded-t-md border-b border-b-zinc-400  bg-zinc-900 p-3`,
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
      className={twMerge('text-lg font-normal text-zinc-300', className)}
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
        'from h-24 w-full rounded-b-md bg-zinc-800 px-3 py-4 text-cyan-50',
        className,
      )}
    />
  )
})
ClipBoardArea.displayName = 'ClipBoardArea'

export {
  ClipBoardAction,
  ClipBoardHeader,
  ClipBoardArea,
  ClipBoardLabel,
  ClipBoardContainer,
}
