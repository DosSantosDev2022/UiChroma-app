import { Logo } from '@/assets/icons/Logo'
import { Button, Input, Label } from '@/components/packages'
import Link from 'next/link'

const Login = () => {
	return (
		<>
			<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<div className='flex items-center gap-1 justify-center'>
						<Logo />
						<span className='text-xl font-extrabold'>Chroma</span>
					</div>
					<h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-primary'>
						Faça login na sua conta
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form action='#' method='POST' className='space-y-6'>
						<div>
							<Label
								htmlFor='email'
								className='block text-sm/6 font-medium'
							>
								Email
							</Label>
							<div className='mt-2'>
								<Input
									id='email'
									name='email'
									type='email'
									placeholder='Digite seu email'
									required
									autoComplete='email'
								/>
							</div>
						</div>

						<div>
							<div className='flex items-center justify-between'>
								<Label
									htmlFor='password'
									className='block text-sm/6 font-medium'
								>
									Senha
								</Label>
								<div className='text-sm'>
									<Link
										href='/'
										className='font-semibold text-primary hover:text-primary-hover'
									>
										Esqueceu a senha?
									</Link>
								</div>
							</div>
							<div className='mt-2'>
								<Input
									id='password'
									name='password'
									type='password'
									placeholder='Digite sua senha'
									required
									autoComplete='current-password'
								/>
							</div>
						</div>

						<div>
							<Button sizes='full' type='submit'>
								Login
							</Button>
						</div>
					</form>

					<p className='mt-10 text-center text-sm/6 text-muted-foreground'>
						Não sou membro?{' '}
						<Link
							href='/'
							className='font-semibold text-primary hover:text-primary-hover'
						>
							Comece um teste gratuito de 14 dias
						</Link>
					</p>
				</div>
			</div>
		</>
	)
}

export default Login
