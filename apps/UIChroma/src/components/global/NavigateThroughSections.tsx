'use client'
import {
  Navigation,
  NavigationItem,
  NavigationList
} from '@repo/ChromaUI/components'
import { useState } from 'react'
import { GoDotFill } from 'react-icons/go'

interface NavigateThroughSectionsProps {
  links: {
    label: string
    href: string
  }[]
}

const NavigateThroughSections = ({ links }: NavigateThroughSectionsProps) => {
  const [activeLink, setActiveLink] = useState<string>(links[0]?.href || '')

  const handleButtonClickScrollIntoView = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveLink(id)
  }

  return (
    <Navigation>
      <h3 className="mb-1 px-2 py-1 text-sm font-semibold">
        Navegue nessa página
      </h3>

      <NavigationList className="sm:flex-col sm:gap-1">
        {links.map((link) => (
          <NavigationItem
            onClick={() => handleButtonClickScrollIntoView(link.href)}
            className={`gap-2 p-1.5 text-muted-foreground
                hover:no-underline
                ${activeLink === link.href ? 'font-bold text-primary' : ''}`}
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

