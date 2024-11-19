import { Dropdown } from '@/components/global/dropdown'
import { Navigation } from '@/components/global/navigation'
import { GET_COMPONENTS_NAME } from '@/utils/getComponentNames'
import { FaHouse } from 'react-icons/fa6'
import { HiTemplate } from 'react-icons/hi'
import { IoIosRocket } from 'react-icons/io'
import { IoDocumentText } from 'react-icons/io5'
import { MdNewReleases } from 'react-icons/md'
import { TbComponents } from 'react-icons/tb'
import { v4 as uuid } from 'uuid'



export async function NaigationLinks() {
  const { pageComponents } = await GET_COMPONENTS_NAME()

  const componentList = [...pageComponents].sort((a, b) =>
    a.name.localeCompare(b.name),
  )

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
      Url: '/documentation',
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
                    {component.name}
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
