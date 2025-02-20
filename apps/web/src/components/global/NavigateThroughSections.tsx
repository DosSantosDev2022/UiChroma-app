'use client'
import {
	Navigation,
	NavigationItem,
	NavigationList,
} from '@repo/ui/components'
import { useState } from 'react'
import { GoDotFill } from 'react-icons/go'

interface NavigateThroughSectionsProps {
	links: {
		id: string
		label: string
		url: string
	}[]
}

const NavigateThroughSections = ({
	links,
}: NavigateThroughSectionsProps) => {
	const [activeLink, setActiveLink] = useState<string>(links[0]?.url || '')

	const handleButtonClickScrollIntoView = (id: string) => {
		const element = document.getElementById(id)
		if (!element) {
			console.warn(`Elemento com ID ${id} não encontrado.`)
			return
		}
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
		setActiveLink(id)
	}

	return (
		<Navigation>
			<h3 className='mb-1 truncate px-2 py-1 text-sm font-semibold'>
				Navegue nessa página
			</h3>

			<NavigationList className='sm:flex-col sm:gap-1'>
				{links.map((link) => (
					<NavigationItem
						onClick={() => handleButtonClickScrollIntoView(link.url)}
						className={`gap-2 truncate p-1.5 text-sm text-muted-foreground
                hover:no-underline
                ${activeLink === link.url ? 'font-bold text-primary' : ''}`}
						key={link.label}
					>
						<GoDotFill size={12} />
						{link.label}
					</NavigationItem>
				))}
			</NavigationList>
		</Navigation>
	)
}

export { NavigateThroughSections }
