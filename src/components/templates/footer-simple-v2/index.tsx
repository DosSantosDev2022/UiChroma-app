import { FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
	const linkNav = [
		{
			label: 'MarketPlace',
			url: '/#',
		},
		{
			label: 'Dashboard',
			url: '/#',
		},
		{
			label: 'Blog',
			url: '/#',
		},
	]

	const resources = [
		{
			label: 'Guides',
			url: '/#',
		},
		{
			label: 'Suporte',
			url: '/#',
		},
		{
			label: 'Help',
			url: '/#',
		},
	]

	const developers = [
		{
			label: 'Guides',
			url: '/#',
		},
		{
			label: 'Api Reference',
			url: '/#',
		},
	]

	const company = [
		{
			label: 'Changelog',
			url: '/#',
		},
		{
			label: 'Careers',
			url: '/#',
		},
		{
			label: 'Terms of Services',
			url: '/#',
		},
	]

	const socialLinks = [
		{
			icon: <FaDiscord />,
			url: '/#',
			label: 'Discord',
		},
		{
			icon: <FaInstagram />,
			url: '/#',
			label: 'Instagram',
		},
	]

	return (
		<footer className='text-muted-foreground px-4 py-8 md:px-8'>
			<div className='mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-8'>
				{/* Logo / About */}
				<div>
					<h2 className='text-primary text-3xl font-bold'>Logo</h2>
					<p className='mt-2 text-sm'>
						Sua loja favorita online. Qualidade, preço justo e confiança.
					</p>
					{/* Redes Sociais */}
					<div className='flex gap-4 text-xl mt-3'>
						{socialLinks.map((link, index) => (
							<Link
								className='hover:scale-95 duration-300 transition-all cursor-pointer'
								key={index}
								href={link.url}
								aria-label={link.label}
							>
								{link.icon}
							</Link>
						))}
					</div>
				</div>

				{/* Navegação */}
				<nav>
					<h3 className='text-primary text-lg font-semibold mb-2'>
						Links
					</h3>
					<ul className='space-y-1 text-sm'>
						{linkNav.map((link, index) => (
							<li
								className='hover:text-primary duration-300 transition-all cursor-pointer'
								key={index}
							>
								<Link href={link.url}>{link.label}</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* resources */}
				<nav>
					<h3 className='text-primary text-lg font-semibold mb-2'>
						Resources
					</h3>
					<ul className='space-y-1 text-sm'>
						{resources.map((list, index) => (
							<li
								className='hover:text-primary duration-300 transition-all cursor-pointer'
								key={index}
							>
								{list.label}{' '}
							</li>
						))}
					</ul>
				</nav>
				{/* developers */}
				<nav>
					<h3 className='text-primary text-lg font-semibold mb-2'>
						Developers
					</h3>
					<ul className='space-y-1 text-sm'>
						{developers.map((list, index) => (
							<li
								className='hover:text-primary duration-300 transition-all cursor-pointer'
								key={index}
							>
								{list.label}{' '}
							</li>
						))}
					</ul>
				</nav>

				{/* company  */}

				<nav>
					<h3 className='text-primary text-lg font-semibold mb-2'>
						Company
					</h3>
					<ul className='space-y-1 text-sm'>
						{company.map((list, index) => (
							<li
								className='hover:text-primary duration-300 transition-all cursor-pointer'
								key={index}
							>
								{list.label}{' '}
							</li>
						))}
					</ul>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
