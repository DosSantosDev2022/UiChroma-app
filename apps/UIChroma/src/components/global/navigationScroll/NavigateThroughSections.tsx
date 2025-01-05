'use client'
import {
  Button,
  Navigation,
  NavigationGroup,
  NavigationItem,
  NavigationList
} from '@repo/ChromaUI/components'

import { useState } from 'react'
import { GoDotFill } from 'react-icons/go'

interface NavigateThroughSectionsProps {
  links: {
    text: string
    url: string
  }[]
}

const NavigateThroughSections = ({ links }: NavigateThroughSectionsProps) => {
  const [activeLink, setActiveLink] = useState<string>(links[0]?.url || '')

  const handleButtonClickScrollIntoView = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveLink(id)
  }

  return (
    <Navigation>
      <h3 className="mb-1 px-2 py-1 text-sm font-semibold text-primary">
        Navegue nessa página
      </h3>
      <NavigationGroup>
        <NavigationList className="flex flex-col space-y-0">
          {links.map((link) => (
            <NavigationItem key={link.text}>
              <Button
                onClick={() => handleButtonClickScrollIntoView(link.url)}
                variants="link"
                sizes="full"
                className={`justify-start gap-2 text-base font-light text-muted-foreground 
                    hover:no-underline 
                    ${activeLink === link.url ? 'font-bold text-accent' : ''}`}
              >
                <GoDotFill size={12} />
                {link.text}
              </Button>
            </NavigationItem>
          ))}
        </NavigationList>
      </NavigationGroup>
    </Navigation>
  )
}

export { NavigateThroughSections }
