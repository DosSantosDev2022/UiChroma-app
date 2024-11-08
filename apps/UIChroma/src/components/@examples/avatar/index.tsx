'use client'
import {
  AvatarFallback,
  Avatar,
  AvatarImage,
} from '@repo/ChromaUI/components/avatar.tsx'

export default function AvatarPreview() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>JS</AvatarFallback>
    </Avatar>
  )
}
