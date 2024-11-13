'use client'
import { Button } from '@repo/ChromaUI/components/button/Button.tsx'
import { GoDotFill } from 'react-icons/go'

import { useState } from 'react'
import { NavigationItem } from '../navigation/navigationItem'
import { NavigationList } from '../navigation/navigationList'
import { NavigationRoot } from '../navigation/navigationRoot'

interface NavigateThroughSectionsProps {
  links: {
    id: string
    text: string
    url: string
  }[]
}

export function NavigateThroughSections({ links }: NavigateThroughSectionsProps) {
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
      <NavigationList className="flex flex-col space-y-0">
        {links.map(
          (link) =>

            <NavigationItem key={link.url}>
              <Button
                onClick={() => handleButtonClickScrollIntoView(link.url)}
                variant="link"
                sizes="full"
                className={`flex justify-start gap-2 text-base font-light text-muted-foreground 
                    duration-300 hover:scale-105 hover:font-bold hover:no-underline 
                    ${activeLink === link.url ? 'text-primary font-bold' : ''}`}
              >
                <GoDotFill size={12} />
                {link.text}
              </Button>
            </NavigationItem>

        )}
      </NavigationList>
    </NavigationRoot>
  )
}
