import { vi, describe, expect, it, type Mock } from 'vitest'
import type { ComponentsPageData } from "@/@types/page-components-types"
import { GET_DETAILS_COMPONENT } from './get-Details-Component'


vi.mock('@/app/api/cms/hygraph', () => ({
  fetchHygraphQuery: vi.fn()
}))

import { fetchHygraphQuery } from '@/app/api/cms/hygraph'

describe('GET_DETAILS_COMPONENT', () => {
  it('should return the component details correctly', async () => {
    const slug = 'my-component'
    
    // Mock da resposta da API
    const mockResponse: ComponentsPageData = {
      pageComponent: {
        id: '1',
        name: 'My Component',
        version: '1.0',
        slug: 'my-component',
        description: 'This is a component description',
        docsLinks: [
          { id: '1', title: 'Docs Link', label: 'Documentation', url: 'http://example.com' }
        ],
        features: [
          { id: '1', name: 'Feature 1' }
        ],
        sourceCode: {
          description: 'Some description',
          title: 'Source Code Title',
          blockCode: 'source-code-block',
        },
        utilities:{ title: 'Utility 1', description: 'Utility description', blockCode: 'utility-code' },
        sampleCode: { title: 'Sample Code', description: 'Sample description', blockCode: 'sample-code' },
        dependencies: [
          { id: '1', title: 'Dependency 1', description: 'Dependency description', command: 'install' }
        ],
        developing: false,
        navigateThroughSections: [
          { id: '1', label: 'Section 1', url: '/section-1' }
        ]
      }
    }

    ;(fetchHygraphQuery as Mock).mockResolvedValue(mockResponse)

    // Chamada da função que está sendo testada
    const result = await GET_DETAILS_COMPONENT(slug)

    // Verificando se o mock foi chamado corretamente
    expect(fetchHygraphQuery).toHaveBeenCalledOnce()
    expect(fetchHygraphQuery).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ slug }),
      expect.objectContaining({ cache: 'no-cache' })
    )

    // Verificando se a resposta é igual ao esperado
    expect(result).toEqual(mockResponse)
  })

  it('should throw error if fetchHygraphQuery function fails', async () => {
    const slug = 'my-component';

    // Simulando um erro
    (fetchHygraphQuery as Mock).mockRejectedValue(new Error('API error'))

    await expect(GET_DETAILS_COMPONENT(slug)).rejects.toThrow('API error')
  })
})
