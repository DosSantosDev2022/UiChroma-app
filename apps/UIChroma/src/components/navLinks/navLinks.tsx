import { v4 as uuid } from 'uuid'
import { hooks } from '@/lib/hooks'
import { Navigation } from '@/components/navigation'
import { Dropdown } from '@/components/dropdown'
import { IoDocumentText } from 'react-icons/io5'
import { GiHook } from 'react-icons/gi'
import { HiTemplate } from 'react-icons/hi'
import { TbComponents } from 'react-icons/tb'
import { MdNewReleases } from 'react-icons/md'
import { IoIosRocket } from 'react-icons/io'
import { FaHouse } from 'react-icons/fa6'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'
import { GetPathLinks } from '@/types/pages'

const GET_PATH_LINKS = async (): Promise<GetPathLinks> => {
  const query = `
      query MyQuery {
      components {
        id
        slug
        componentName
      }
      hook {
        id
        slug
        hookName
      }
    }
  `
  return fetchHygraphQuery(query)
}

export async function NaigationLinks() {
  const { components,hook } = await GET_PATH_LINKS()

  const componentList = [...components].sort((a, b) =>
    a.componentName.localeCompare(b.componentName),
  )
  const hookList = [...hook].sort((a,b) => a.hookName.localeCompare(b.hookName))

  /* const templates = [...Templates].sort((a, b) => a.name.localeCompare(b.name)) */

  const links = [
    {
      id: uuid(),
      name: 'Home',
      Url: '/',
      icon: <FaHouse size={18} />,
    },
    {
      id: uuid(),
      name: 'Primeiros passos',
      Url: '/gettingStarted',
      icon: <IoIosRocket size={18} />,
    },
    {
      id: uuid(),
      name: 'Documentação',
      Url: '/docs',
      icon: <IoDocumentText size={18} />,
    },
    {
      id: uuid(),
      name: 'Releases',
      Url: '/releases',
      icon: <MdNewReleases size={18} />,
    },
  ]
  return (
    <Navigation.Root>
      <Navigation.List>
        {links.map((link) => (
          <Navigation.Item key={link.id}>
            <Navigation.Links className='text-secondary-50' url={link.Url}>
              <Navigation.Icon>{link.icon}</Navigation.Icon>
              {link.name}
            </Navigation.Links>
          </Navigation.Item>
        ))}

        <Navigation.Item>
          <Dropdown.Root>
            <Dropdown.Trigger>
              <Dropdown.Icon>
                <HiTemplate size={18} />
              </Dropdown.Icon>
              Templates
            </Dropdown.Trigger>

            <Navigation.List className="mt-2 max-h-[268px] space-y-1 overflow-y-scroll px-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-900">
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
            </Navigation.List>
          </Dropdown.Root>
        </Navigation.Item>

        <Navigation.Item>
          <Dropdown.Root>
            <Dropdown.Trigger>
              <Dropdown.Icon>
                <TbComponents size={18} />
              </Dropdown.Icon>
              Componentes
            </Dropdown.Trigger>

            <Navigation.List className="mt-2 max-h-[268px] space-y-1 overflow-y-scroll px-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-900">
              {componentList.map((component) => (
                <Navigation.Item className="border-none " key={component.id}>
                  <Navigation.Links
                    className="w-full bg-transparent"
                    url={`/preview/components/${component.slug}`}
                  >
                    {component.componentName}
                  </Navigation.Links>
                </Navigation.Item>
              ))}
            </Navigation.List>
          </Dropdown.Root>
        </Navigation.Item>

        <Navigation.Item>
          <Dropdown.Root>
            <Dropdown.Trigger>
              <Dropdown.Icon>
                <GiHook size={18} />
              </Dropdown.Icon>
              Hooks
            </Dropdown.Trigger>

            <Navigation.List className="mt-2 max-h-[268px] space-y-1 overflow-y-scroll px-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-900">
              {hookList.map((hook) => (
                <Navigation.Item className="border-none " key={hook.id}>
                  <Navigation.Links
                    className="w-full bg-transparent"
                    url={`/preview/hooks/${hook.hookName}`}
                  >
                    {hook.hookName}
                  </Navigation.Links>
                </Navigation.Item>
              ))}
            </Navigation.List>
          </Dropdown.Root>
        </Navigation.Item>
      </Navigation.List>
    </Navigation.Root>
  )
}
