import {
	Navigation,
	NavigationItem,
	NavigationLink,
	NavigationList,
} from '@/components/packages'

const NavigationPreview = () => {
	return (
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
	)
}

export default NavigationPreview
