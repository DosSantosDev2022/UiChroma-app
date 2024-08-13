'use client'
import { GoDotFill } from 'react-icons/go'
import { Button } from '@repo/ui/components/button.tsx'

import { NavigationRoot } from '../navigation/navigationRoot'
import { NavigationItem } from '../navigation/navigationItem'
import { NavigationList } from '../navigation/navigationList'
import { useState } from 'react'

interface NavigateThroughSectionsProps {
  links:{
    text:string
    url: string
  }[]
}

export function NavigateThroughSections({links}:NavigateThroughSectionsProps) {
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
        {links.map((link) => (
          <NavigationItem key={link.text}>
            <Button
              onClick={() => handleButtonClickScrollIntoView(link.url)}
              variant="link"
              sizes='full'
              className={`flex justify-start  gap-2  text-base font-light text-secondary-600 
                duration-300 hover:scale-105 hover:font-bold hover:no-underline 
                ${activeLink === link.url ? 'text-primary-700 font-bold': ''}`}
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
