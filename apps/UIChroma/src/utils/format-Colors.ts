export const formatColors = (colors: Record<string, string>) => {
  return Object.fromEntries(
    Object.entries(colors).map(([key, value]) => {
      const match = value.match(/(\d+(\.\d+)?)/g) // Captura apenas números (incluindo decimais)
      if (!match) return [key, value] // Se não encontrar, mantém o valor original
      const [h, s, l] = match.map(Number) // Converte os valores para números
      return [key, `${h} ${s}% ${l}%`] // Retorna os valores no formato correto
    })
  )
}
