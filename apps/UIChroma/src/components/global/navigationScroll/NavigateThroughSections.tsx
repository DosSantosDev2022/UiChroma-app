'use client'
import { Button } from '@repo/ChromaUI/components/button/Button.tsx'
import { useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { Navigation } from '../navigation/index'

interface NavigateThroughSectionsProps {
  links: {
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
    <Navigation.Root>
      <Navigation.List className="flex flex-col space-y-0">
        {links.map(
          (link) =>

            <Navigation.Item key={link.text}>
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
            </Navigation.Item>

        )}
      </Navigation.List>
    </Navigation.Root>
  )
}
