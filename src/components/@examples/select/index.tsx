import {
	SelectContent,
	SelectOption,
	SelectProvider,
	SelectRoot,
	SelectTrigger,
} from '@/components/packages'
import { v4 as uuidv4 } from 'uuid'

const SelectPreview = () => {
	const options = [
		{
			id: uuidv4(),
			label: 'Opção 01',
		},
		{
			id: uuidv4(),
			label: 'Opção 02',
		},
		{
			id: uuidv4(),
			label: 'Opção 03',
		},
		{
			id: uuidv4(),
			label: 'Opção 04',
		},
		{
			id: uuidv4(),
			label: 'Opção 05',
		},
	]

	return (
		<SelectProvider>
			<SelectRoot>
				<SelectTrigger>Abrir select</SelectTrigger>
				<SelectContent>
					{options.map((option) => (
						<SelectOption key={option.id}>{option.label}</SelectOption>
					))}
				</SelectContent>
			</SelectRoot>
		</SelectProvider>
	)
}

export default SelectPreview
