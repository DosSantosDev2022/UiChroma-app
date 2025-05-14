import '@testing-library/jest-dom'
import {
	render,
	screen,
	fireEvent,
	renderHook,
} from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import {
	PopoverRoot,
	PopoverTrigger,
	PopoverContent,
	PopoverProvider,
	usePopoverContext,
} from './Popover'

describe('Popover Component', () => {
	it('should render PopoverRoot without errors', () => {
		render(
			<PopoverRoot>
				<div>Conteúdo</div>
			</PopoverRoot>,
		)
		expect(screen.getByText('Conteúdo')).toBeInTheDocument()
	})

	it('should provide context and allow PopoverTrigger and PopoverContent to access it', () => {
		render(
			<PopoverRoot>
				<PopoverTrigger>Abrir Popover</PopoverTrigger>
				<PopoverContent>Conteúdo do Popover</PopoverContent>
			</PopoverRoot>,
		)
		expect(screen.getByText('Abrir Popover')).toBeInTheDocument()
		expect(
			screen.queryByText('Conteúdo do Popover'),
		).not.toBeInTheDocument()
	})

	it('should toggle the open state when PopoverTrigger is clicked', async () => {
		render(
			<PopoverRoot>
				<PopoverTrigger>Abrir Popover</PopoverTrigger>
				<PopoverContent>Conteúdo do Popover</PopoverContent>
			</PopoverRoot>,
		)

		const triggerButton = screen.getByText('Abrir Popover')
		expect(
			screen.queryByText('Conteúdo do Popover'),
		).not.toBeInTheDocument()

		await fireEvent.click(triggerButton)
		expect(screen.getByText('Conteúdo do Popover')).toBeInTheDocument()
		expect(triggerButton).toHaveAttribute('aria-expanded', 'true')

		await fireEvent.click(triggerButton)
		expect(
			screen.queryByText('Conteúdo do Popover'),
		).not.toBeInTheDocument()
		expect(triggerButton).toHaveAttribute('aria-expanded', 'false')
	})

	it('should render PopoverContent with the correct position and alignment classes', () => {
		render(
			<PopoverRoot>
				<PopoverTrigger>Abrir Popover</PopoverTrigger>
				<PopoverContent position='absolute' alignment='top-right'>
					Conteúdo do Popover
				</PopoverContent>
			</PopoverRoot>,
		)

		const triggerButton = screen.getByText('Abrir Popover')
		fireEvent.click(triggerButton)

		const popoverContentElement = screen
			.getByText('Conteúdo do Popover')
			.closest('div') // Tenta encontrar o div ancestral mais próximo

		expect(popoverContentElement).toHaveClass('absolute')
		expect(popoverContentElement).toHaveClass('bottom-0')
		expect(popoverContentElement).toHaveClass('left-full')
		expect(popoverContentElement).toHaveClass('ml-1')
	})

	it('should render PopoverContent with the correct position and alignment classes', () => {
		render(
			<PopoverRoot>
				<PopoverTrigger>Abrir Popover</PopoverTrigger>
				<PopoverContent position='absolute' alignment='top-right'>
					Conteúdo do Popover
				</PopoverContent>
			</PopoverRoot>,
		)

		const triggerButton = screen.getByText('Abrir Popover')
		fireEvent.click(triggerButton)

		const popoverContentElement = screen
			.getByText('Conteúdo do Popover')
			.closest('div') // Tenta encontrar o div ancestral mais próximo

		expect(popoverContentElement).toHaveClass('absolute')
		expect(popoverContentElement).toHaveClass('bottom-0')
		expect(popoverContentElement).toHaveClass('left-full')
		expect(popoverContentElement).toHaveClass('ml-1')
	})
})
