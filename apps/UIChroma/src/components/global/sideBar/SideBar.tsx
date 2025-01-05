import { Logo } from '@/assets/icons/Logo'
import { links, themes } from '@/enums/sideBar'
import { GET_COMPONENTS_NAME } from '@/utils/getComponentNames'
import {
  SideBar,
  SideBarContent,
  SideBarDropContent,
  SideBarDropItem,
  SideBarDropList,
  SideBarDropRoot,
  SideBarDropTrigger,
  SideBarFooter,
  SideBarHeader,
  SideBarItem,
  SideBarList,
  SideBarLogo,
  SideBarNavigation,
  SideBarRoot
} from '@repo/ChromaUI/components'
import Link from 'next/link'
import { LuComponent } from 'react-icons/lu'
import { MdColorLens } from 'react-icons/md'

const AppSidebar = async () => {
  const { pageComponents } = await GET_COMPONENTS_NAME()

  const componentList = [...pageComponents].sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  /* const templates = [...Templates].sort((a, b) => a.name.localeCompare(b.name)) */
  return (
    <SideBarRoot>
      <SideBar>
        <SideBarHeader trigger>
          <SideBarLogo label="Chroma" icon={<Logo />} />
          {/* <Badge variant="accent" size="md">
            v.1.0.0
          </Badge> */}
        </SideBarHeader>
        <SideBarContent>
          <SideBarNavigation>
            {/* Navegação de links normais  */}
            <SideBarList>
              {links.map((link) => (
                <Link key={link.id} href={link.Url}>
                  <SideBarItem icon={<link.icon size={20} />}>
                    {link.name}
                  </SideBarItem>
                </Link>
              ))}
            </SideBarList>
            {/* menu dropdows */}
            <SideBarDropRoot>
              <SideBarDropTrigger icon={<MdColorLens size={20} />}>
                Temas
              </SideBarDropTrigger>
              <SideBarDropContent>
                <SideBarDropList>
                  {themes.map((theme, index) => (
                    <Link key={index} href={`/${theme.url}`}>
                      <SideBarDropItem>{theme.label}</SideBarDropItem>
                    </Link>
                  ))}
                </SideBarDropList>
              </SideBarDropContent>
            </SideBarDropRoot>

            <SideBarDropRoot>
              <SideBarDropTrigger icon={<LuComponent size={20} />}>
                Componentes
              </SideBarDropTrigger>
              <SideBarDropContent>
                <SideBarDropList>
                  {componentList.map((component, index) => (
                    <SideBarDropItem key={index}>
                      <Link
                        id={component.id}
                        href={`/preview/components/${component.slug}`}
                      >
                        {component.name}
                      </Link>
                    </SideBarDropItem>
                  ))}
                </SideBarDropList>
              </SideBarDropContent>
            </SideBarDropRoot>
          </SideBarNavigation>
        </SideBarContent>

        <SideBarFooter>
          <span>© 2024 DosSantosDev.</span>
          <span>Todos os direitos reservados.</span>
        </SideBarFooter>
      </SideBar>
    </SideBarRoot>
  )
}

export { AppSidebar }
