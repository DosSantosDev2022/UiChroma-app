import '@testing-library/jest-dom'
import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pagination } from '@/components/packages'
import * as nextNavigation from 'next/navigation'

// ✅ Mock realista e funcional com URLSearchParams
vi.mock('next/navigation', async () => {
	const actual =
		await vi.importActual<typeof import('next/navigation')>(
			'next/navigation',
		)

	return {
		...actual,
		useSearchParams: vi.fn(() => new URLSearchParams('page=1')), // default inicial
		usePathname: vi.fn(() => '/'), // pathname fixo para os testes
	}
})

describe('Pagination', () => {
	beforeEach(() => {
		// Atualiza o retorno do hook para cada teste
		const mockParams = new URLSearchParams({ page: '1' })

		// Cast necessário para usar mockImplementation
		;(
			nextNavigation.useSearchParams as unknown as Mock
		).mockImplementation(() => mockParams)
	})

	it('should render pagination links correctly', () => {
		render(<Pagination page={1} limit={10} total={100} />)

		expect(screen.getByText('1')).toBeInTheDocument()
		expect(screen.getByText('2')).toBeInTheDocument()
		expect(screen.getByText('3')).toBeInTheDocument()
	})

	it('should highlight the current page', () => {
		render(<Pagination page={2} limit={10} total={100} />)

		const activePage = screen.getByText('2')
		expect(activePage).toHaveClass('bg-primary') // ajustável conforme classe usada
		expect(activePage).toHaveAttribute('href', '#')
	})

	it('should generate the correct links with query string', () => {
		render(<Pagination page={1} limit={10} total={100} />)

		const page2 = screen.getByText('2')
		const link = page2.closest('a')
		expect(link).toHaveAttribute('href', '?page=2')
	})

	it('should hide if there is only one page', () => {
		render(<Pagination page={1} limit={10} total={9} />)

		expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
	})

	it('should render the ellipsis correctly', () => {
		render(<Pagination page={5} limit={10} total={500} />)

		const ellipsis = screen.getAllByText('...')
		expect(ellipsis.length).toBeGreaterThan(0)
	})
})
