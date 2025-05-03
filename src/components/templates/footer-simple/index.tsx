import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
	const linkNav = [
		{
			label: 'Início',
			url: '/#',
		},
		{
			label: 'Produtos',
			url: '/#',
		},
		{
			label: 'Contato',
			url: '/#',
		},
		{
			label: 'Sobre nós',
			url: '/#',
		},
	]

	const listContact = [
		{
			label: 'Email: contato@loja.com',
		},
		{
			label: 'Tel: (11) 99999-9999',
		},
		{
			label: 'Seg - Sex: 08h às 18h',
		},
	]

	const socialLinks = [
		{
			icon: <FaFacebook />,
			url: '/#',
			label: 'Facebook',
		},
		{
			icon: <FaInstagram />,
			url: '/#',
			label: 'Instagram',
		},
		{
			icon: <FaTwitter />,
			url: '/#',
			label: 'Twitter',
		},
	]

	return (
		<footer className='text-muted-foreground px-4 py-8 md:px-8'>
			<div className='mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8'>
				{/* Logo / About */}
				<div>
					<h2 className='text-2xl font-bold'>Logo</h2>
					<p className='mt-2 text-sm'>
						Sua loja favorita online. Qualidade, preço justo e confiança.
					</p>
				</div>

				{/* Navegação */}
				<nav>
					<h3 className='text-lg font-semibold mb-2'>Navegação</h3>
					<ul className='space-y-1 text-sm'>
						{linkNav.map((link, index) => (
							<li
								className='hover:text-primary duration-300 transition-all'
								key={index}
							>
								<Link href={link.url}>{link.label}</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Contato */}
				<nav>
					<h3 className='text-lg font-semibold mb-2'>Contato</h3>
					<ul className='space-y-1 text-sm'>
						{listContact.map((list, index) => (
							<li key={index}>{list.label} </li>
						))}
					</ul>
				</nav>

				{/* Redes Sociais */}
				<div>
					<h3 className='text-lg font-semibold mb-2'>Redes Sociais</h3>
					<div className='flex gap-4 text-xl'>
						{socialLinks.map((link, index) => (
							<Link
								className='hover:scale-95 duration-300 transition-all'
								key={index}
								href={link.url}
								aria-label={link.label}
							>
								{link.icon}
							</Link>
						))}
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className='mt-8 border-t border-border pt-4 text-xs text-center text-muted-foreground'>
				© {new Date().getFullYear()} MyStore. Todos os direitos reservados.
			</div>
		</footer>
	)
}

export default Footer
