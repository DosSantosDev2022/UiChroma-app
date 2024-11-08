'use client'

import React from 'react'
import { twMerge } from 'tailwind-merge'

// Componente Avatar
const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className,
    )}
    {...props}
  />
))

Avatar.displayName = 'Avatar'

// Componente AvatarImage
const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={twMerge('aspect-square h-full w-full object-cover', className)}
    {...props}
  />
))

AvatarImage.displayName = 'AvatarImage'

// Componente AvatarFallback
const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(
      'flex h-full w-full items-center justify-center rounded-full bg-gray-200',
      className,
    )}
    {...props}
  >
    {children}
  </div>
))

AvatarFallback.displayName = 'AvatarFallback'

export { Avatar, AvatarImage, AvatarFallback }
