import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
	Navigation,
	NavigationItem,
	NavigationLink,
	NavigationList,
} from './navigation'

beforeEach(() => {
	render(
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
		</Navigation>,
	)
})

describe('Navigation component', () => {
	it('should render Navigation correctly', () => {
		expect(screen.getByLabelText('navigation')).toBeInTheDocument()
	})

	it('should toggle dropdownItems visibility  when clicking on NavigationItem', () => {
		const trigger = screen.getByText('Categorias')
		expect(screen.queryByText('dropdown')).not.toBeInTheDocument()
		fireEvent.click(trigger)
		expect(screen.getByLabelText('dropdown')).toBeInTheDocument()
	})
})
