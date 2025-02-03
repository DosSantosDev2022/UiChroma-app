'use client'
import { Button, Navigation } from '@repo/ChromaUI/components'
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
      <div>
        <ul>
          {links.map((link) => (
            <li
              className="transition-colors duration-300 hover:bg-muted-hover"
              key={link.label}
            >
              <Button
                onClick={() => handleButtonClickScrollIntoView(link.href)}
                variants="link"
                sizes="full"
                className={`justify-start gap-2 truncate text-base font-light 
                    text-muted-foreground hover:no-underline
                    ${activeLink === link.href ? 'font-bold text-primary' : ''}`}
              >
                <GoDotFill size={12} />
                {link.label}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Navigation>
  )
}

export { NavigateThroughSections }
