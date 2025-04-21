import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, expect, it, vi } from 'vitest'
import {
	PageButton,
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from './Pagination'

describe('Pagination Component', () => {
	it('should render the pagination container', () => {
		render(<Pagination />)
		expect(screen.getByLabelText('pagination')).toBeInTheDocument()
	})

	it('should render the pagination content within the pagination', () => {
		render(
			<Pagination>
				<PaginationContent />
			</Pagination>,
		)
		expect(screen.getByLabelText('pagination-list')).toBeInTheDocument()
	})

	it('should render a pagination item within the pagination content', () => {
		render(
			<PaginationContent>
				<PaginationItem>1</PaginationItem>
			</PaginationContent>,
		)
		expect(screen.getByLabelText('pagination-item')).toBeInTheDocument()
	})

	it('should render a PageButton with correct text and active state', () => {
		render(<PageButton isActive>1</PageButton>)
		const button = screen.getByRole('button', { name: '1' })
		expect(button).toHaveAttribute('aria-current', 'page')
		expect(button).toHaveClass('bg-primary-foreground text-primary')
	})

	it('should render the previous button with the correct aria-label', () => {
		render(<PaginationPrevious />)
		const prevButton = screen.getByRole('button', {
			name: /go to previous page/i,
		})
		expect(prevButton).toBeInTheDocument()
	})

	it('should render the next button with the correct aria-label', () => {
		render(<PaginationNext />)
		const nextButton = screen.getByRole('button', {
			name: /go to next page/i,
		})
		expect(nextButton).toBeInTheDocument()
	})

	it('should disable the next button when passing the disabled property', () => {
		render(<PaginationNext disabled />)
		const nextButton = screen.getByRole('button', {
			name: /go to next page/i,
		})
		expect(nextButton).toBeDisabled()
	})

	it('should disable the previous button when passing the disabled property', () => {
		render(<PaginationPrevious disabled />)
		const prevButton = screen.getByRole('button', {
			name: /go to previous page/i,
		})
		expect(prevButton).toBeDisabled()
	})

	it('should call onClick when a PageButton is clicked', () => {
		const handleClick = vi.fn()
		render(<PageButton onClick={handleClick}>1</PageButton>)
		const button = screen.getByRole('button', { name: '1' })
		fireEvent.click(button)
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	it('should renders the ellipsis icon correctly', () => {
		render(<PaginationEllipsis />)
		const ellipsis = screen.getByLabelText('More pages')
		expect(ellipsis).toBeInTheDocument()
	})
})
