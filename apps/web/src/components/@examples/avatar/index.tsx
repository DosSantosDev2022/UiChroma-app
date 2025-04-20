import {
	Avatar,
	AvatarContainer,
	AvatarFallback,
	AvatarImage,
	AvatarLabel,
	AvatarName,
	AvatarWrapper,
} from '@repo/ui/components'
import { v4 as uuidv4 } from 'uuid'

const AvatarPreview = () => {
	const avatarItens = [
		{
			id: uuidv4(),
			img: '/img/avatar-01.jpg',
			fallback: 'AV1',
			name: 'Jhon Doe',
			label: 'jhondoe@email.com',
		},
		{
			id: uuidv4(),
			img: '/img/avatar-02.jpg',
			fallback: 'AV2',
			name: 'Jhon Doe',
			label: 'jhondoe@email.com',
		},
		{
			id: uuidv4(),
			img: '/img/avatar-03.jpg',
			fallback: 'AV3',
			name: 'Jhon Doe',
			label: 'jhondoe@email.com',
		},
	]

	return (
		<div className='flex w-full flex-col gap-2 sm:flex-row'>
			<div className='flex w-full items-center justify-center gap-2 rounded-md border border-border p-2'>
				<div className='flex flex-col items-center space-y-6'>
					<span className='text-md font-normal text-foreground'>
						Avatar simples
					</span>
					{avatarItens.map((avatar) => (
						<Avatar key={avatar.id}>
							<AvatarImage src={avatar.img} />
							<AvatarFallback>{avatar.fallback}</AvatarFallback>
						</Avatar>
					))}
				</div>
			</div>

			<div className='flex w-full flex-col items-center justify-center gap-2 rounded-md border border-border p-2'>
				<div className='flex flex-col items-center space-y-6'>
					<span className='text-md font-normal text-foreground'>
						Avatar completo
					</span>
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
		</div>
	)
}

export default AvatarPreview
