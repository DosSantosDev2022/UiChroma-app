import { vi, describe, expect, it, type Mock } from 'vitest'
import { GET_COMPONENTS_NAME } from '@/services/get-Component-Names'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'

vi.mock('@/app/api/cms/hygraph', () => ({
	fetchHygraphQuery: vi.fn(),
}))

describe('GET_COMPONENTS_NAME', () => {
	it('should return the data correctly', async () => {
		const mockResponse = {
			pageComponents: [
				{
					id: '1',
					slug: 'comp-1',
					name: 'Componente 1',
					developing: true,
				},
				{
					id: '2',
					slug: 'comp-2',
					name: 'Componente 2',
					developing: false,
				},
			],
		}

		// simula retorno da API
		;(fetchHygraphQuery as Mock).mockResolvedValue(mockResponse)

		const result = await GET_COMPONENTS_NAME()

		expect(fetchHygraphQuery).toHaveBeenCalledOnce()
		expect(result).toEqual(mockResponse)
	})

	it('should throw error if fetchHygraphQuery fails', async () => {
		;(fetchHygraphQuery as Mock).mockRejectedValue(new Error('API error'))

		await expect(GET_COMPONENTS_NAME()).rejects.toThrow('API error')
	})
})
