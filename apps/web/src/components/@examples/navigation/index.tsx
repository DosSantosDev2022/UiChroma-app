import {
	Navigation,
	NavigationGroup,
	NavigationItem,
	NavigationLink,
	NavigationList,
} from '@repo/ui/components'
import { v4 as uuidv4 } from 'uuid'

const NavigationPreview = () => {
	const links = [
		{
			id: uuidv4(),
			label: 'Home',
			url: '#',
		},
		{
			id: uuidv4(),
			label: 'About',
			url: '#',
		},
		{
			id: uuidv4(),
			label: 'Contact',
			url: '#',
		},
		{
			id: uuidv4(),
			label: 'Blog',
			url: '#',
		},
	]

	return (
		<div className='mx-auto'>
			<Navigation>
				<NavigationGroup>
					<NavigationList>
						{links.map((link) => (
							<NavigationItem key={link.id}>
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
