import {
  Navigation,
  NavigationGroup,
  NavigationItem,
  NavigationLink,
  NavigationList
} from '@repo/ChromaUI/components'

const NavigationPreview = () => {
  const links = [
    {
      label: 'Home',
      url: '/home'
    },
    {
      label: 'About',
      url: '/about'
    },
    {
      label: 'Contact',
      url: '/contact'
    },
    {
      label: 'Blog',
      url: '/blog'
    }
  ]

  return (
    <>
      <Navigation>
        <NavigationGroup>
          <NavigationList>
            {links.map((link, index) => (
              <NavigationItem key={index}>
                <NavigationLink href={link.url}>{link.label}</NavigationLink>
              </NavigationItem>
            ))}
          </NavigationList>
        </NavigationGroup>
      </Navigation>
    </>
  )
}

export default NavigationPreview
