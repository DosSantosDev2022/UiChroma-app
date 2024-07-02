import { v4 as uuidv4 } from 'uuid'

export const hooks = [
  {
    id: uuidv4(),
    name: 'usePagination',
    url: '/preview/hooks/usePagination',
    description: 'Um hook que calcula a quantidade de páginas ',
  },
  {
    id: uuidv4(),
    name: 'useState',
    url: '/preview/hooks/useState',
    description: 'Um hook que retorna uma lista de estados e cidades do brasil',
  },
  {
    id: uuidv4(),
    name: 'useCity',
    url: '/preview/hooks/useCity',
    description: 'Um hook que retorna uma lista de cidades do brasil',
  },
]
