import { Logo } from '@/assets/icons/Logo'
import { docs, links, themes } from '@/enums/sideBar'
import { GET_COMPONENTS_NAME } from '@/services/get-Component-Names'
import {
	Badge,
	SideBar,
	SideBarContent,
	SideBarDropGroup,
	SideBarDropItem,
	SideBarDropList,
	SideBarDropRoot,
	SideBarDropTrigger,
	SideBarHeader,
	SideBarItem,
	SideBarList,
	SideBarLogo,
	SideBarNavigation,
	SideBarRoot,
} from '@/components/packages'
import Link from 'next/link'
import { IoDocumentText } from 'react-icons/io5'
import { LuComponent } from 'react-icons/lu'
import { MdColorLens } from 'react-icons/md'

const AppSidebar = async () => {
	const { pageComponents } = await GET_COMPONENTS_NAME()

	const componentList = [...pageComponents].sort((a, b) =>
		a.name.localeCompare(b.name),
	)
	return (
		<SideBarRoot>
			<SideBar>
				<SideBarHeader trigger>
					<SideBarLogo label='Chroma' icon={<Logo />} />
				</SideBarHeader>
				<SideBarContent>
					<SideBarNavigation>
						{/* Navegação de links normais  */}
						<SideBarList>
							{links.map((link) => (
								<Link key={link.id} href={link.Url}>
									<SideBarItem
										tooltip={link.name}
										icon={<link.icon size={20} />}
									>
										{link.name}
									</SideBarItem>
								</Link>
							))}
						</SideBarList>

						{/* menu dropdows */}
						<SideBarDropRoot>
							<SideBarDropTrigger
								tooltip='Documentação'
								icon={<IoDocumentText size={20} />}
							>
								Documentação
							</SideBarDropTrigger>
							<SideBarDropGroup>
								<SideBarDropList>
									{docs.map((doc) => (
										<Link key={doc.label} href={`/${doc.url}`}>
											<SideBarDropItem>
												{doc.label}
												{doc.status && (
													<Badge className='ml-2 py-0.5 text-xs' size='md'>
														{doc.status}
													</Badge>
												)}
											</SideBarDropItem>
										</Link>
									))}
								</SideBarDropList>
							</SideBarDropGroup>
						</SideBarDropRoot>

						<SideBarDropRoot>
							<SideBarDropTrigger
								tooltip='Temas'
								icon={<MdColorLens size={20} />}
							>
								Temas
							</SideBarDropTrigger>
							<SideBarDropGroup>
								<SideBarDropList>
									{themes.map((theme) => (
										<Link key={theme.label} href={`/${theme.url}`}>
											<SideBarDropItem>{theme.label}</SideBarDropItem>
										</Link>
									))}
								</SideBarDropList>
							</SideBarDropGroup>
						</SideBarDropRoot>

						<SideBarDropRoot>
							<SideBarDropTrigger
								tooltip='Componentes'
								icon={<LuComponent size={20} />}
							>
								Componentes
							</SideBarDropTrigger>
							<SideBarDropGroup>
								<SideBarDropList>
									{componentList.map((component) => (
										<SideBarDropItem key={component.id}>
											<Link
												className='space-x-2'
												id={component.id}
												href={`/preview/components/${component.slug}`}
											>
												{component.name}
												{component.developing && (
													<Badge
														className='ml-2 px-1 py-0.5 text-xs'
														size='md'
													>
														in-dev
													</Badge>
												)}
											</Link>
										</SideBarDropItem>
									))}
								</SideBarDropList>
							</SideBarDropGroup>
						</SideBarDropRoot>
					</SideBarNavigation>
				</SideBarContent>
			</SideBar>
		</SideBarRoot>
	)
}

export { AppSidebar }
