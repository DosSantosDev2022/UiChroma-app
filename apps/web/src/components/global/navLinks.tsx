import { v4 as uuid } from 'uuid'
import { hooks } from '@/lib/hooks'
import { Navigation } from './navigation'
import { Dropdown } from '@/components/global/dropdown'
import { IoDocumentText } from 'react-icons/io5'
import { GiHook } from 'react-icons/gi'
import { HiTemplate } from 'react-icons/hi'
import { TbComponents } from 'react-icons/tb'
import { MdNewReleases } from 'react-icons/md'
import { IoIosRocket } from 'react-icons/io'
import { FaHouse } from 'react-icons/fa6'

export function NaigationLinks() {
  /* const componentList = [...ComponentList].sort((a, b) =>
    a.name.localeCompare(b.name),
  ) */
  const hookList = [...hooks]

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
            <Navigation.Links url={link.Url}>
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
              {/* {componentList.map((c) => (
                <Navigation.Item className="border-none " key={c.id}>
                  <Navigation.Links
                    className="w-full bg-transparent"
                    url={c.url}
                  >
                    {c.name}
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
                <GiHook size={18} />
              </Dropdown.Icon>
              Hooks
            </Dropdown.Trigger>

            <Navigation.List className="mt-2 max-h-[268px] space-y-1 overflow-y-scroll px-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-900">
              {hookList.map((h) => (
                <Navigation.Item className="border-none " key={h.id}>
                  <Navigation.Links
                    className="w-full bg-transparent"
                    url={h.url}
                  >
                    {h.name}
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
