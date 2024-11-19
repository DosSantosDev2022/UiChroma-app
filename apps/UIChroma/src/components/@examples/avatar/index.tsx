'use client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/chromaui/components/avatar/Avatar.tsx'

export default function AvatarPreview() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>JS</AvatarFallback>
    </Avatar>
  )
}
