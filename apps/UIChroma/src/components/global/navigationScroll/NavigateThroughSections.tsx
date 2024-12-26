'use client'
import {
  Button,
  NavigationItem,
  NavigationList,
  NavigationRoot
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
    <NavigationRoot>
      <h3 className="mb-1 px-2 py-1 text-sm font-semibold text-muted-foreground">
        Navegue nessa página
      </h3>
      <NavigationList className="flex flex-col space-y-0">
        {links.map((link) => (
          <NavigationItem key={link.text}>
            <Button
              onClick={() => handleButtonClickScrollIntoView(link.url)}
              variants="link"
              sizes="full"
              className={`flex justify-start gap-2 text-base font-light text-muted-foreground 
                    duration-300 hover:scale-105 hover:font-bold hover:no-underline 
                    ${activeLink === link.url ? 'font-bold text-accent' : ''}`}
            >
              <GoDotFill size={12} />
              {link.text}
            </Button>
          </NavigationItem>
        ))}
      </NavigationList>
    </NavigationRoot>
  )
}

export { NavigateThroughSections }

