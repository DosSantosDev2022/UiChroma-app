export const fetchHygraphQuery = async <T>(
  query: string,
  variables?: Record<string, any>,
  options?: { cache?: RequestCache; revalidate?: number }
): Promise<T> => {
  const { cache = 'force-cache', revalidate } = options || {}

  const body: Record<string, any> = { query }
  if (variables !== undefined && variables !== null) {
    body.variables = variables
  }

  const response = await fetch(process.env.HYGRAPH_URL || '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    cache,
    next: revalidate ? { revalidate } : undefined,
    body: JSON.stringify({ query, variables }),
  })

  const { data } = await response.json()

  return data
}
