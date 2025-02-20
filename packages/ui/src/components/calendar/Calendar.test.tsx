import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { useCalendar } from '../../hooks/useCalendar'

vi.mock('../../hooks/useCalendar', () => {
	return {
		useCalendar: vi.fn(() => ({
			nextMonth: vi.fn(),
			prevMonth: vi.fn(),
			currentDate: new Date(2024, 7, 1),
			dates: Array.from(
				{ length: 30 },
				(_, i) => new Date(2024, 7, i + 1),
			),
			selectedDate: null,
			startDate: null,
			endDate: null,
			handleSelectDate: vi.fn(),
			isWithinSelectedRange: vi.fn(),
		})),
	}
})

import { Calendar } from './Calendar'

describe('Component Calendar', () => {
	it('should render the calendar component correctly', () => {
		render(
			<Calendar
				value={new Date(2024, 7, 1)}
				onChange={vi.fn()}
				range={false}
			/>,
		)
		expect(screen.getByText('agosto 2024')).toBeInTheDocument()
		expect(screen.getByText('Dom')).toBeInTheDocument()
	})

	it('should advance to the next month by clicking the button', async () => {
		const mockNextMonth = vi.fn()

		vi.mocked(useCalendar).mockReturnValue({
			nextMonth: mockNextMonth,
			prevMonth: vi.fn(),
			currentDate: new Date(2024, 7, 1),
			dates: Array.from(
				{ length: 30 },
				(_, i) => new Date(2024, 7, i + 1),
			),
			selectedDate: null,
			startDate: null,
			endDate: null,
			handleSelectDate: vi.fn(),
			isWithinSelectedRange: vi.fn(),
		})

		render(
			<Calendar
				value={new Date(2024, 7, 1)}
				onChange={vi.fn()}
				range={false}
			/>,
		)

		const nextButton = screen.getByRole('button', {
			name: /chevron-right/i,
		})
		await userEvent.click(nextButton)

		expect(mockNextMonth).toHaveBeenCalledTimes(1)
	})

	it('should must go back to the previous month by clicking the button', async () => {
		const mockPrevMonth = vi.fn()

		vi.mocked(useCalendar).mockReturnValue({
			nextMonth: vi.fn(),
			prevMonth: mockPrevMonth,
			currentDate: new Date(2024, 7, 1),
			dates: Array.from(
				{ length: 30 },
				(_, i) => new Date(2024, 7, i + 1),
			),
			selectedDate: null,
			startDate: null,
			endDate: null,
			handleSelectDate: vi.fn(),
			isWithinSelectedRange: vi.fn(),
		})
		render(
			<Calendar
				value={new Date(2024, 7, 1)}
				onChange={vi.fn()}
				range={false}
			/>,
		)

		const prevButton = screen.getByRole('button', {
			name: /chevron-left/i,
		})
		await userEvent.click(prevButton)

		expect(mockPrevMonth).toHaveBeenCalledTimes(1)
	})

	it('should select a date correctly', async () => {
		const handleSelectedDate = vi.fn()
		vi.mocked(useCalendar).mockReturnValue({
			currentDate: new Date(2024, 7, 1),
			nextMonth: vi.fn(),
			prevMonth: vi.fn(),
			dates: Array.from(
				{ length: 30 },
				(_, i) => new Date(2024, 7, i + 1),
			),
			selectedDate: null,
			startDate: null,
			endDate: null,
			handleSelectDate: handleSelectedDate,
			isWithinSelectedRange: vi.fn(),
		})

		render(
			<Calendar
				value={new Date(2024, 7, 1)}
				onChange={vi.fn()}
				range={false}
			/>,
		)

		const dateButton = screen.getByText('15')
		await userEvent.click(dateButton)

		expect(handleSelectedDate).toHaveBeenCalledTimes(1)
		expect(handleSelectedDate).toHaveBeenCalledWith(new Date(2024, 7, 15))
	})

	it('should select a start date and reset end date when selecting a new range', async () => {
		const mockOnChange = vi.fn()

		// Variáveis para armazenar o estado das datas
		let startDate: Date | null = null
		let endDate: Date | null = null

		// Mock do hook useCalendar
		vi.mocked(useCalendar).mockReturnValue({
			currentDate: new Date(2024, 7, 1),
			nextMonth: vi.fn(),
			prevMonth: vi.fn(),
			dates: Array.from(
				{ length: 30 },
				(_, i) => new Date(2024, 7, i + 1),
			),
			selectedDate: null,
			startDate: startDate,
			endDate: endDate,
			handleSelectDate: vi.fn().mockImplementation((date) => {
				if (!startDate) {
					startDate = date // A primeira data selecionada é o startDate
				} else {
					endDate = date // A segunda data selecionada é o endDate
				}

				mockOnChange({
					startDate: startDate ? startDate : null,
					endDate: endDate ? endDate : null,
				})
			}),
			isWithinSelectedRange: vi.fn(),
		})

		// Renderiza o componente Calendar com a propriedade `range={true}` para habilitar o modo intervalo
		render(
			<Calendar
				value={new Date(2024, 7, 1)} // Inicializa com 1º de agosto de 2024
				onChange={mockOnChange}
				range={true} // Modo intervalo habilitado
			/>,
		)

		// Seleciona a primeira data (startDate)
		const firstDate = screen.getByText('5') // Refere-se ao dia 5 de agosto
		await userEvent.click(firstDate)

		// Verifica se o mockOnChange foi chamado corretamente com startDate e endDate nulo
		expect(mockOnChange).toHaveBeenCalledWith({
			startDate: new Date(2024, 7, 5),
			endDate: null, // EndDate deve ser nulo, pois ainda não foi selecionado
		})

		// Agora, seleciona a segunda data (endDate)
		const secondDate = screen.getByText('10') // Refere-se ao dia 10 de agosto
		await userEvent.click(secondDate)

		// Verifica se o mockOnChange foi chamado corretamente com o intervalo
		expect(mockOnChange).toHaveBeenCalledWith({
			startDate: new Date(2024, 7, 5), // A startDate deve ser mantida
			endDate: new Date(2024, 7, 10), // A endDate agora deve ser 10 de agosto
		})
	})

	it('should invert startDate and endDate if endDate is before startDate', async () => {
		const mockOnChange = vi.fn()
		// Variáveis para armazenar o estado das datas
		let startDate: Date | null = null
		let endDate: Date | null = null

		// Mock do hook useCalendar
		vi.mocked(useCalendar).mockReturnValue({
			currentDate: new Date(2024, 7, 1),
			nextMonth: vi.fn(),
			prevMonth: vi.fn(),
			dates: Array.from(
				{ length: 30 },
				(_, i) => new Date(2024, 7, i + 1),
			),
			selectedDate: null,
			startDate: startDate,
			endDate: endDate,
			handleSelectDate: vi.fn().mockImplementation((date) => {
				if (!startDate) {
					startDate = date // A primeira data selecionada é o startDate
				} else {
					endDate = date // A segunda data selecionada é o endDate

					if (endDate && endDate < startDate) {
						;[startDate, endDate] = [endDate, startDate]
					}
				}

				mockOnChange({
					startDate: startDate,
					endDate: endDate,
				})
			}),
			isWithinSelectedRange: vi.fn(),
		})
		render(
			<Calendar
				value={new Date(2024, 7, 1)}
				onChange={vi.fn()}
				range={true}
			/>,
		)

		// Clica na data de início
		const firstDate = screen.getByText('5')
		await userEvent.click(firstDate)

		// Clica na data final
		const secondDate = screen.getByText('1')
		await userEvent.click(secondDate)

		// As data devem ser invertidas
		expect(mockOnChange).toHaveBeenCalledWith({
			startDate: new Date(2024, 7, 1),
			endDate: new Date(2024, 7, 5),
		})
	})
})
