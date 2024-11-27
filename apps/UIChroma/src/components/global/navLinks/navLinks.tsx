
import { links } from '@/enums/sideBar'
import { GET_COMPONENTS_NAME } from '@/utils/getComponentNames'
import { DropDownContainer, DropDownContent, DropDownIcon, DropDownItem, DropDownLink, DropDownList, DropDownProvider, DropDownTrigger } from '@repo/chromaui/components/dropdown/Dropdown.tsx'
import { NavigationIcon, NavigationItem, NavigationLink, NavigationList, NavigationRoot } from '@repo/chromaui/components/navigation/navigation.tsx'
import Link from 'next/link'
import { HiTemplate } from 'react-icons/hi'
import { TbComponents } from 'react-icons/tb'




export async function NaigationLinks() {
  const { pageComponents } = await GET_COMPONENTS_NAME()
  const componentList = [...pageComponents].sort((a, b) => a.name.localeCompare(b.name))

  /* const templates = [...Templates].sort((a, b) => a.name.localeCompare(b.name)) */


  return (
    <>
      <NavigationRoot>
        <NavigationList>
          {links.map((link) => (
            <NavigationItem key={link.id}>
              <NavigationLink asChild>
                <Link className='flex w-full items-center justify-start gap-2 ' href={link.Url} >
                  <NavigationIcon>
                    <link.icon size={18} />
                  </NavigationIcon>
                  {link.name}
                </Link>
              </NavigationLink>
            </NavigationItem>
          ))}
        </NavigationList>
      </NavigationRoot>

      <DropDownProvider>
        <DropDownContainer>
          <DropDownTrigger className='border-none'>
            <DropDownIcon>
              <HiTemplate size={18} />
            </DropDownIcon>
            Templates
          </DropDownTrigger>


          <DropDownContent position='sticky'>
            <DropDownList className="mt-2 max-h-[268px] space-y-1 overflow-y-scroll px-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-900">
              {/*   {templates.map((template) => (
                  <Navigation.Item className="border-none " key={template.id}>
                    <Navigation.Links
                      className="w-full bg-transparent"
                      url={template.url}
                    >
                      {template.name}
                    </Navigation.Links>
                  </Navigation.Item>
                ))} */}
              a
            </DropDownList>
          </DropDownContent>

        </DropDownContainer>
      </DropDownProvider>

      <DropDownProvider>
        <DropDownContainer>
          <DropDownTrigger className='border-none'>
            <DropDownIcon>
              <TbComponents size={18} />
            </DropDownIcon>
            Componentes
          </DropDownTrigger>
          <DropDownContent position='sticky'>
            <DropDownList className="mt-2 max-h-[268px] space-y-1 overflow-y-scroll px-4 custom-scrollbar">
              {componentList.map((component) => (
                <DropDownItem className="border-none " key={component.id}>
                  <DropDownLink
                    asChild
                  >
                    <Link href={`/preview/components/${component.slug}`}>{component.name}</Link>
                  </DropDownLink>
                </DropDownItem>
              ))}
            </DropDownList>

          </DropDownContent>

        </DropDownContainer>
      </DropDownProvider>
    </>
  )
}
