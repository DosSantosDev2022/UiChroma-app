'use client'
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
		<div className='flex flex-col h-full items-start'>
			<h3 className='px-2 py-1 text-sm font-semibold mb-6'>
				Navegue nessa página
			</h3>

			<nav className='w-full'>
				<ul className='lg:flex-col sm:gap-1 items-start w-full'>
					{links.map((link) => (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<li
							onClick={() => handleButtonClickScrollIntoView(link.url)}
							className={`gap-2 text-sm text-muted-foreground w-full flex items-center
                hover:no-underline rounded-md px-2 py-1.5 cursor-pointer hover:bg-accent transition-all duration-300
                ${activeLink === link.url ? 'font-bold text-primary' : ''}`}
							key={link.label}
						>
							<GoDotFill size={12} />
							{link.label}
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export { NavigateThroughSections }
