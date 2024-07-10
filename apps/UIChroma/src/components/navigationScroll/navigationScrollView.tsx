'use client'
import { GoDotFill } from 'react-icons/go'
import { Button } from '@repo/ui/components/button.tsx'

import { NavigationRoot } from '../navigation/navigationRoot'
import { NavigationItem } from '../navigation/navigationItem'
import { NavigationList } from '../navigation/navigationList'

export function NavigationScrollView() {
  const handleButtonClickScrollIntoView = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navigations = [
    {
      text: 'Início',
      url: 'inicio',
    },
    {
      text: 'Features',
      url: 'feature',
    },
    {
      text: 'Exemplo',
      url: 'exemplo',
    },
    {
      text: 'CopyCode',
      url: 'copyCode',
    },
    {
      text: 'Dependencias',
      url: 'dependencias',
    },
    {
      text: 'Como usar',
      url: 'como-usar',
    },
  ]
  return (
    <NavigationRoot>
      <NavigationList className="flex flex-col space-y-0 ">
        {navigations.map((navigation) => (
          <NavigationItem key={navigation.text} className="px-1 py-2">
            <Button
              onClick={() => handleButtonClickScrollIntoView(navigation.url)}
              variant="link"
              sizes='full'
              className="flex items-center gap-2 text-start text-lg font-normal text-primary-900 duration-300 hover:scale-105 hover:font-bold hover:no-underline"
            >
              <GoDotFill size={12} />
              {navigation.text}
            </Button>
          </NavigationItem>
        ))}
      </NavigationList>
    </NavigationRoot>
  )
}
