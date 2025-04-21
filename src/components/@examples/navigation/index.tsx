import {
	Navigation,
	NavigationItem,
	NavigationLink,
	NavigationList,
} from '@/components/packages'
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
				<NavigationList>
					<NavigationItem>
						<NavigationLink href='#'>Home</NavigationLink>
					</NavigationItem>
					<NavigationItem>
						<NavigationLink href='#'>Sobre</NavigationLink>
					</NavigationItem>
					<NavigationItem
						isDrop
						id='dropdown1'
						dropdownItems={[
							<NavigationLink key={'item01'} href='#'>
								React js
							</NavigationLink>,
							<NavigationLink key={'item02'} href='#'>
								Next js
							</NavigationLink>,
							<NavigationLink key={'item03'} href='#'>
								JavaScript
							</NavigationLink>,
						]}
					>
						Categorias
					</NavigationItem>
					<NavigationItem>
						<NavigationLink href='#'>Contato</NavigationLink>
					</NavigationItem>
				</NavigationList>
			</Navigation>
		</div>
	)
}

export default NavigationPreview
