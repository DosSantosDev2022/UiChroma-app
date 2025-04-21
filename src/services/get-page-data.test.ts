import { vi, describe, expect, it, type Mock } from 'vitest'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'
import { GET_PAGE_DATA } from './get-page-data'
import type { PageDataTypes } from '@/@types/pages-Data-Types'

vi.mock('@/app/api/cms/hygraph')

describe('GET_PAGE_DATA', () => {
	it('should return the page data correctly', async () => {
		const slug = 'minha-pagina'

		const mockResponse: PageDataTypes = {
			documentationPage: {
				id: '1',
				title: 'Minha Página',
				slug: 'minha-pagina',
				sectionOne: {
					identifier: 'sec1',
					id: 's1',
					title: 'Seção 1',
					description: 'Descrição da seção 1',
					content: { raw: { children: [] } },
				},
				sectionTwo: {
					identifier: 'sec2',
					id: 's2',
					title: 'Seção 2',
					description: 'Descrição da seção 2',
					content: { raw: { children: [] } },
				},
				sectionThree: {
					identifier: 'sec3',
					id: 's3',
					title: 'Seção 3',
					description: 'Descrição da seção 3',
					content: { raw: { children: [] } },
				},
				sectionFour: {
					identifier: 'sec4',
					id: 's4',
					title: 'Seção 4',
					description: 'Descrição da seção 4',
					content: { raw: { children: [] } },
				},
				sectionFive: {
					identifier: 'sec5',
					id: 's5',
					title: 'Seção 5',
					description: 'Descrição da seção 5',
					content: { raw: { children: [] } },
				},
				sectionSix: {
					identifier: 'sec6',
					id: 's6',
					title: 'Seção 6',
					description: 'Descrição da seção 6',
					content: { raw: { children: [] } },
				},
				sectionSeven: {
					identifier: 'sec7',
					id: 's7',
					title: 'Seção 7',
					description: 'Descrição da seção 7',
					content: { raw: { children: [] } },
				},
				developing: false,
			},
		}

		// Mock da função fetchHygraphQuery
		;(fetchHygraphQuery as Mock).mockResolvedValue(mockResponse)

		const result = await GET_PAGE_DATA(slug)

		expect(fetchHygraphQuery).toHaveBeenCalledOnce()
		expect(fetchHygraphQuery).toHaveBeenCalledWith(
			expect.any(String),
			{ slug },
			{ cache: 'no-cache' },
		)

		expect(result).toEqual(mockResponse)
	})

	it('should throw error if fetchHygraphQuery function fails', async () => {
		const slug = 'erro-pagina'
		;(fetchHygraphQuery as Mock).mockRejectedValue(
			new Error('Erro na API'),
		)

		await expect(GET_PAGE_DATA(slug)).rejects.toThrow('Erro na API')
	})
})
