import { Badge } from '@repo/ChromaUI/components'

type BadgeType = {
	variant: 'primary' | 'secondary' | 'accent' | 'muted'
	children: string
}

const BedgePreview = () => {
	const types: BadgeType[] = [
		{
			variant: 'primary',
			children: 'Primary',
		},
		{
			variant: 'secondary',
			children: 'Secondary',
		},
		{
			variant: 'accent',
			children: 'Accent',
		},
		{
			variant: 'muted',
			children: 'Muted',
		},
	]

	return (
		<div className='flex w-full items-center justify-center gap-2'>
			{types.map((type) => (
				<Badge key={type.variant} variant={type.variant} size={'md'}>
					{type.children}
				</Badge>
			))}
		</div>
	)
}

export default BedgePreview
