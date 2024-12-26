import { Avatar, AvatarFallback, AvatarImage } from '@repo/ChromaUI/components'

const AvatarPreview = () => {
  const avatarItens = [
    {
      id: 'avatar01',
      img: '/img/avatar-01.jpg',
      fallback: 'AV1'
    },
    {
      id: 'avatar02',
      img: '/img/avatar-02.jpg',
      fallback: 'AV2'
    },
    {
      id: 'avatar03',
      img: '/img/avatar-03.jpg',
      fallback: 'AV3'
    }
  ]

  return (
    <div className="flex gap-2">
      {avatarItens.map((avatar) => (
        <Avatar key={avatar.id}>
          <AvatarImage src={avatar.img} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}

export default AvatarPreview
