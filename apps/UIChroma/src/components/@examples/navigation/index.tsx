import {
	Navigation,
	NavigationGroup,
	NavigationItem,
	NavigationLink,
	NavigationList,
} from '@repo/ChromaUI/components'

const NavigationPreview = () => {
	const links = [
		{
			label: 'Home',
			url: '#',
		},
		{
			label: 'About',
			url: '#',
		},
		{
			label: 'Contact',
			url: '#',
		},
		{
			label: 'Blog',
			url: '#',
		},
	]

	return (
		<div className='mx-auto'>
			<Navigation>
				<NavigationGroup>
					<NavigationList>
						{links.map((link, index) => (
							<NavigationItem key={link.label}>
								<NavigationLink href={link.url}>
									{link.label}
								</NavigationLink>
							</NavigationItem>
						))}
					</NavigationList>
				</NavigationGroup>
			</Navigation>
		</div>
	)
}

export default NavigationPreview
