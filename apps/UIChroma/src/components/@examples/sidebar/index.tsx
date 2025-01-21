import { Logo } from '@/assets/icons/Logo'
import {
  Avatar,
  AvatarContainer,
  AvatarFallback,
  AvatarImage,
  AvatarLabel,
  AvatarName,
  AvatarWrapper,
  DropDownContent,
  DropDownIcon,
  DropDownItem,
  DropDownLabel,
  DropDownLink,
  DropDownList,
  DropDownRoot,
  DropDownTrigger,
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
  SideBarLabel,
  SideBarList,
  SideBarLogo,
  SideBarNavigation,
  SideBarRoot
} from '@repo/ChromaUI/components'
import Link from 'next/link'
import {
  FaCreditCard,
  FaFile,
  FaInbox,
  FaShoppingBag,
  FaUser,
  FaUserFriends
} from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { MdDashboard, MdSettings } from 'react-icons/md'
import { RiTeamFill } from 'react-icons/ri'
const links = [
  { id: 1, name: 'Dashboard', Url: '#', icon: MdDashboard },
  { id: 2, name: 'E-commerce', Url: '#', icon: FaShoppingBag },
  { id: 3, name: 'Inbox', Url: '#', icon: FaInbox },
  { id: 4, name: 'Profile', Url: '#', icon: FaUserFriends },
  { id: 5, name: 'Settings', Url: '#', icon: MdSettings }
]

const Clients = [
  { label: 'Register', url: '#' },
  { label: 'Delete', url: '#' },
  { label: 'Reports', url: '#' }
]

const Documents = [
  { id: '1', name: 'Export', slug: 'button', developing: false },
  { id: '2', name: 'Import', slug: 'card', developing: false },
  { id: '3', name: 'Tabela', slug: 'table', developing: false }
]

const list = [
  {
    id: '0001',
    content: 'Profile',
    icon: <FaUser />
  },
  {
    id: '0002',
    content: 'Biling',
    icon: <FaCreditCard />
  },
  {
    id: '0003',
    content: 'Settings',
    icon: <IoMdSettings />
  },
  {
    id: '0004',
    content: 'Team',
    icon: <RiTeamFill />
  }
]

const sideBarPreview = () => {
  return (
    <SideBarRoot>
      <SideBar className="h-[796px]">
        <SideBarHeader trigger>
          <SideBarLogo label="SideBar" icon={<Logo />} />
        </SideBarHeader>
        <SideBarContent>
          <SideBarNavigation>
            {/* Navegação de links normais */}
            <SideBarList>
              {links.map((link) => (
                <Link key={link.id} href={link.Url}>
                  <SideBarItem icon={<link.icon size={20} />}>
                    {link.name}
                  </SideBarItem>
                </Link>
              ))}
            </SideBarList>

            {/* Menu de drop */}
            <SideBarLabel label="DropDowns" />
            <SideBarDropRoot>
              <SideBarDropTrigger icon={<FaUser size={20} />}>
                Clientes
              </SideBarDropTrigger>
              <SideBarDropContent>
                <SideBarDropList>
                  {Clients.map((client, index) => (
                    <Link key={index} href={`/${client.url}`}>
                      <SideBarDropItem>{client.label}</SideBarDropItem>
                    </Link>
                  ))}
                </SideBarDropList>
              </SideBarDropContent>
            </SideBarDropRoot>

            {/* Menu de drop */}
            <SideBarDropRoot>
              <SideBarDropTrigger icon={<FaFile size={20} />}>
                Documents
              </SideBarDropTrigger>
              <SideBarDropContent>
                <SideBarDropList>
                  {Documents.map((document, index) => (
                    <SideBarDropItem key={index}>
                      <Link
                        className="space-x-2"
                        id={document.id}
                        href={`/preview/components/${document.slug}`}
                      >
                        {document.name}
                      </Link>
                    </SideBarDropItem>
                  ))}
                </SideBarDropList>
              </SideBarDropContent>
            </SideBarDropRoot>
          </SideBarNavigation>
        </SideBarContent>

        <SideBarFooter>
          <DropDownRoot>
            <DropDownTrigger>
              <AvatarContainer>
                <Avatar>
                  <AvatarImage src={'/img/avatar-01.jpg'} />
                  <AvatarFallback>{'UI'}</AvatarFallback>
                </Avatar>
                <AvatarWrapper>
                  <AvatarName>Juliano Santos</AvatarName>
                  <AvatarLabel>dossantosdev@gmail.com</AvatarLabel>
                </AvatarWrapper>
              </AvatarContainer>
            </DropDownTrigger>

            <DropDownContent position="absolute">
              <DropDownLabel>My accont</DropDownLabel>
              <DropDownList>
                {list.map((i) => (
                  <DropDownItem key={i.id}>
                    <DropDownLink>
                      <DropDownIcon>{i.icon}</DropDownIcon>
                      {i.content}
                    </DropDownLink>
                  </DropDownItem>
                ))}
              </DropDownList>
            </DropDownContent>
          </DropDownRoot>
        </SideBarFooter>
      </SideBar>
    </SideBarRoot>
  )
}

export default sideBarPreview
