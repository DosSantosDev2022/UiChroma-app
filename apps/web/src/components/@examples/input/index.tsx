import { Input } from '@repo/ChromaUI/components'
import { CiSearch } from 'react-icons/ci'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'

const InputPreview = () => {
	return (
		<div className='flex w-full flex-col space-y-4 p-2'>
			<div className='space-y-1'>
				<label htmlFor='text'>
					Variante: <span className='font-bold'>default</span>
				</label>
				<Input
					variants='default'
					icon={<CiSearch size={20} />}
					placeholder='Buscar...'
					type='text'
				/>
			</div>
			<div className='space-y-1'>
				<label htmlFor='email'>
					Variante: <span className='font-bold'>success</span>
				</label>
				<Input
					variants='success'
					icon={<MdEmail size={20} />}
					placeholder='uichroma@ui.com.br'
					type='email'
				/>
			</div>
			<div className='space-y-1'>
				<label htmlFor='password'>
					Variante: <span className='font-bold'>error</span>
				</label>
				<Input
					variants='error'
					icon={<RiLockPasswordFill size={20} />}
					placeholder='************'
					type='password'
				/>
			</div>
		</div>
	)
}

export default InputPreview
