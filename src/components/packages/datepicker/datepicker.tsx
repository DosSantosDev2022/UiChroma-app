'use client'
import { useState } from 'react'
import { Button } from '../button/Button'
import { format } from 'date-fns'
import { Calendar } from '../calendar/Calendar'
import { ptBR } from 'date-fns/locale'

const DatePicker = ({
	date,
	onChange,
}: {
	date: { startDate: Date | null; endDate: Date | null }
	onChange: (newDate: {
		startDate: Date | null
		endDate: Date | null
	}) => void
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const openCalendar = () => {
		setIsOpen(!isOpen)
	}

	const handleChange = (
		newDate:
			| Date
			| { startDate: Date | null; endDate: Date | null }
			| null,
	) => {
		if (
			newDate &&
			typeof newDate === 'object' &&
			'startDate' in newDate &&
			'endDate' in newDate
		) {
			onChange(newDate)
			setIsOpen(false)
		}
	}

	return (
		<div className='relative'>
			<Button
				className='w-full truncate'
				onClick={openCalendar}
				variants='ghost'
			>
				{date.startDate && date.endDate ? (
					<>
						<span>
							{format(date.startDate, 'dd/MM/yyyy', { locale: ptBR })}
						</span>
						<span>-</span>
						<span>
							{format(date.endDate, 'dd/MM/yyyy', { locale: ptBR })}
						</span>
					</>
				) : (
					'Selecione um período'
				)}
			</Button>

			{isOpen && (
				<div className='absolute top-[100%] left-0 z-50 animate-modal-in'>
					<Calendar onChange={handleChange} value={date} range />
				</div>
			)}
		</div>
	)
}

export { DatePicker }
