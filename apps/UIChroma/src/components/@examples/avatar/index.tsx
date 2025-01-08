import {
  Avatar,
  AvatarContainer,
  AvatarFallback,
  AvatarImage,
  AvatarLabel,
  AvatarName,
  AvatarWrapper
} from '@repo/ChromaUI/components'

const AvatarPreview = () => {
  const avatarItens = [
    {
      id: 'avatar01',
      img: '/img/avatar-01.jpg',
      fallback: 'AV1',
      name: 'Jhon Doe',
      label: 'jhondoe@email.com'
    },
    {
      id: 'avatar02',
      img: '/img/avatar-02.jpg',
      fallback: 'AV2',
      name: 'Jhon Doe',
      label: 'jhondoe@email.com'
    },
    {
      id: 'avatar03',
      img: '/img/avatar-03.jpg',
      fallback: 'AV3',
      name: 'Jhon Doe',
      label: 'jhondoe@email.com'
    }
  ]

  return (
    <div className="flex w-full space-x-1">
      <div className="flex w-full items-center justify-center gap-2 rounded-md p-6">
        {avatarItens.map((avatar) => (
          <Avatar key={avatar.id}>
            <AvatarImage src={avatar.img} />
            <AvatarFallback>{avatar.fallback}</AvatarFallback>
          </Avatar>
        ))}
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-2 rounded-md p-6">
        {avatarItens.map((avatar) => (
          <AvatarContainer key={avatar.id}>
            <Avatar>
              <AvatarImage src={avatar.img} />
              <AvatarFallback>{avatar.fallback}</AvatarFallback>
            </Avatar>
            <AvatarWrapper>
              <AvatarName>{avatar.name}</AvatarName>
              <AvatarLabel>{avatar.label}</AvatarLabel>
            </AvatarWrapper>
          </AvatarContainer>
        ))}
      </div>
    </div>
  )
}

export default AvatarPreview
