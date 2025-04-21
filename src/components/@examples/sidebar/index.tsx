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
	SideBarDropGroup,
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
	SideBarRoot,
} from '@/components/packages'
import Link from 'next/link'
import {
	FaCreditCard,
	FaFile,
	FaInbox,
	FaShoppingBag,
	FaUser,
	FaUserFriends,
} from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { MdDashboard, MdSettings } from 'react-icons/md'
import { RiTeamFill } from 'react-icons/ri'
import { v4 as uuidv4 } from 'uuid'

const links = [
	{ id: uuidv4(), name: 'Dashboard', Url: '#', icon: MdDashboard },
	{ id: uuidv4(), name: 'E-commerce', Url: '#', icon: FaShoppingBag },
	{ id: uuidv4(), name: 'Inbox', Url: '#', icon: FaInbox },
	{ id: uuidv4(), name: 'Profile', Url: '#', icon: FaUserFriends },
	{ id: uuidv4(), name: 'Settings', Url: '#', icon: MdSettings },
]

const Clients = [
	{ id: uuidv4(), label: 'Register', url: '#' },
	{ id: uuidv4(), label: 'Delete', url: '#' },
	{ id: uuidv4(), label: 'Reports', url: '#' },
]

const Documents = [
	{ id: uuidv4(), name: 'Export', slug: 'button', developing: false },
	{ id: uuidv4(), name: 'Import', slug: 'card', developing: false },
	{ id: uuidv4(), name: 'Tabela', slug: 'table', developing: false },
]

const list = [
	{
		id: uuidv4(),
		content: 'Profile',
		icon: <FaUser />,
	},
	{
		id: uuidv4(),
		content: 'Biling',
		icon: <FaCreditCard />,
	},
	{
		id: uuidv4(),
		content: 'Settings',
		icon: <IoMdSettings />,
	},
	{
		id: uuidv4(),
		content: 'Team',
		icon: <RiTeamFill />,
	},
]

const sideBarPreview = () => {
	return (
		<SideBarRoot>
			<SideBar className='h-[796px]'>
				<SideBarHeader trigger>
					<SideBarLogo label='SideBar' icon={<Logo />} />
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
						<SideBarLabel label='DropDowns' />
						<SideBarDropRoot>
							<SideBarDropTrigger icon={<FaUser size={20} />}>
								Clientes
							</SideBarDropTrigger>
							<SideBarDropGroup>
								<SideBarDropList>
									{Clients.map((client) => (
										<Link key={client.id} href={`/${client.url}`}>
											<SideBarDropItem>{client.label}</SideBarDropItem>
										</Link>
									))}
								</SideBarDropList>
							</SideBarDropGroup>
						</SideBarDropRoot>

						{/* Menu de drop */}
						<SideBarDropRoot>
							<SideBarDropTrigger icon={<FaFile size={20} />}>
								Documents
							</SideBarDropTrigger>
							<SideBarDropGroup>
								<SideBarDropList>
									{Documents.map((document) => (
										<SideBarDropItem key={document.id}>
											<Link
												className='space-x-2'
												id={document.id}
												href={`/preview/components/${document.slug}`}
											>
												{document.name}
											</Link>
										</SideBarDropItem>
									))}
								</SideBarDropList>
							</SideBarDropGroup>
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

						<DropDownContent position='absolute'>
							<DropDownLabel>My accont</DropDownLabel>
							<DropDownList>
								{list.map((item) => (
									<DropDownItem key={item.id}>
										<DropDownLink>
											<DropDownIcon>{item.icon}</DropDownIcon>
											{item.content}
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
