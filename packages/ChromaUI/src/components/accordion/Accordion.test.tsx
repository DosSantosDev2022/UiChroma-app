import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import {
	AccordionAnswer,
	AccordionContainer,
	AccordionContent,
	AccordionQuestion,
	AccordionTrigger,
} from './Accordion'

describe('Accordion Component', () => {
	beforeEach(() => {
		render(
			<AccordionContainer>
				<AccordionTrigger>
					<AccordionQuestion>Pergunta?</AccordionQuestion>
				</AccordionTrigger>
				<AccordionContent>
					<AccordionAnswer>Resposta.</AccordionAnswer>
				</AccordionContent>
			</AccordionContainer>,
		)
	})
	it('The accordion component must render correctly', () => {
		expect(screen.getByText('Pergunta?'))
		expect(screen.getByText('Resposta.'))
	})

	it('Accordion must start closed', () => {
		const content = screen.getByLabelText('accordion-content')
		expect(content).toHaveAttribute('data-state', 'closed')
		expect(content).toHaveAttribute('aria-hidden', 'true')
	})

	it('should open when clicking the trigger button', () => {
		const trigger = screen.getByRole('button')
		fireEvent.click(trigger)
		const content = screen.getByLabelText('accordion-content')
		expect(trigger).toHaveAttribute('aria-expanded', 'true')
		expect(content).toHaveAttribute('data-state', 'open')
		expect(content).toHaveAttribute('aria-hidden', 'false')
	})

	it('should close when clicking the trigger button again', () => {
		const trigger = screen.getByRole('button')
		fireEvent.click(trigger) // abre
		fireEvent.click(trigger) // fecha
		const content = screen.getByLabelText('accordion-content')
		expect(trigger).toHaveAttribute('aria-expanded', 'false')
		expect(content).toHaveAttribute('data-state', 'closed')
		expect(content).toHaveAttribute('aria-hidden', 'true')
	})
})
