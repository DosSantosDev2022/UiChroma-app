import { describe, it, expect, vi, type Mock } from 'vitest'
import { GET_RELEASES } from './get-Releases'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'
import type { ReleasePage } from '@/@types/page-releases-Types'

// Mock da função
vi.mock('@/app/api/cms/hygraph', () => ({
	fetchHygraphQuery: vi.fn(),
}))

describe('GET_RELEASES', () => {
	const mockResponse: ReleasePage = {
		releasePage: {
			title: 'Release Notes',
			description: 'Detalhes das versões do sistema',
			releases: [
				{
					id: '1',
					version: 'v1.0.0',
					date: '2024-04-01',
					title: 'Primeiro Release',
					commits: [
						{
							id: 'c1',
							description: {
								raw: {
									children: [],
								},
							},
						},
					],
				},
			],
		},
	}

	it('deve retornar os dados da página de releases corretamente', async () => {
		// Configurando mock para retornar sucesso
		;(fetchHygraphQuery as Mock).mockResolvedValue(mockResponse)

		const result = await GET_RELEASES('v1', '2024-01-01', '2024-12-31')

		expect(fetchHygraphQuery).toHaveBeenCalledOnce()
		expect(fetchHygraphQuery).toHaveBeenCalledWith(
			expect.any(String),
			{
				searchTerm: 'v1',
				startDate: '2024-01-01',
				endDate: '2024-12-31',
			},
			{ cache: 'no-cache' },
		)

		expect(result).toEqual(mockResponse)
	})

	it('deve lançar erro se a função fetchHygraphQuery falhar', async () => {
		// Mockando erro
		;(fetchHygraphQuery as Mock).mockRejectedValue(
			new Error('Erro na API'),
		)

		await expect(GET_RELEASES('v1')).rejects.toThrow('Erro na API')
	})
})
