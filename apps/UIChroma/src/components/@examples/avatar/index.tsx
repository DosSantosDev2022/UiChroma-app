import { Avatar, AvatarFallback, AvatarImage } from '@repo/ChromaUI/components'

const AvatarPreview = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>JS</AvatarFallback>
    </Avatar>
  )
}

export default AvatarPreview
