import { Logo } from '@/assets/icons/Logo'
import { docs, links, themes } from '@/enums/sideBar'
import { GET_COMPONENTS_NAME } from '@/services/get-Component-Names'
import {
  SideBar,
  SideBarContent,
  SideBarDropContent,
  SideBarDropItem,
  SideBarDropList,
  SideBarDropRoot,
  SideBarDropTrigger,
  SideBarHeader,
  SideBarItem,
  SideBarList,
  SideBarLogo,
  SideBarNavigation,
  SideBarRoot
} from '@repo/ChromaUI/components'
import Link from 'next/link'
import { IoDocumentText } from 'react-icons/io5'
import { LuComponent } from 'react-icons/lu'
import { MdColorLens } from 'react-icons/md'

const AppSidebar = async () => {
  const { pageComponents } = await GET_COMPONENTS_NAME()

  const componentList = [...pageComponents].sort((a, b) =>
    a.name.localeCompare(b.name)
  )
  return (
    <SideBarRoot>
      <SideBar>
        <SideBarHeader>
          <SideBarLogo label="Chroma" icon={<Logo />} />
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
              <SideBarDropTrigger icon={<IoDocumentText size={20} />}>
                Documentação
              </SideBarDropTrigger>
              <SideBarDropContent>
                <SideBarDropList>
                  {docs.map((doc, index) => (
                    <Link key={index} href={`/${doc.url}`}>
                      <SideBarDropItem>{doc.label}</SideBarDropItem>
                    </Link>
                  ))}
                </SideBarDropList>
              </SideBarDropContent>
            </SideBarDropRoot>

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
                        className="space-x-2"
                        id={component.id}
                        href={`/preview/components/${component.slug}`}
                      >
                        {component.name}
                        {component.developing && (
                          <span className="ml-2  rounded-lg  bg-accent px-1 py-0.5 text-xs text-accent-foreground">
                            in-dev
                          </span>
                        )}
                      </Link>
                    </SideBarDropItem>
                  ))}
                </SideBarDropList>
              </SideBarDropContent>
            </SideBarDropRoot>
          </SideBarNavigation>
        </SideBarContent>
      </SideBar>
    </SideBarRoot>
  )
}

export { AppSidebar }
