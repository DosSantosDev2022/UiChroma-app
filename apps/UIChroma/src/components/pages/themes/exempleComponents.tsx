'use client'

import * as Examples from '@/components/@examples'
import { ContainerPreview } from './container'
import { useThemeStore } from '@/store/use-Theme-Store'
import { useEffect } from 'react'
import { updateCssVariables } from '@/utils/update-Css-Variables'

export function ExempleComponents() {
  const { theme, lightColors, darkColors } = useThemeStore()

  useEffect(() => {
    updateCssVariables(theme, lightColors, darkColors) // Aplica as variáveis CSS com base no tema
  }, [theme, lightColors, darkColors])

  return (
    <div className="grid grid-cols-1 gap-6 bg-background text-foreground lg:grid-cols-2">
      <ContainerPreview title="Componente button">
        <Examples.ButtonPreview />
      </ContainerPreview>

      <ContainerPreview title="Componente Bedge">
        <Examples.BadgePreview />
      </ContainerPreview>

      <ContainerPreview title="Componente Input">
        <Examples.InputPreview />
      </ContainerPreview>

      <ContainerPreview title="Componente Calendar">
        <Examples.CalendarPreview />
      </ContainerPreview>

      <ContainerPreview title="Componente Card">
        <Examples.CardPreview />
      </ContainerPreview>

      <ContainerPreview title="Componente Card Image">
        <Examples.CardImagePreview />
      </ContainerPreview>

      <ContainerPreview title="Componente pagination">
        <Examples.PaginationPreview />
      </ContainerPreview>

      <ContainerPreview title="Componente Select">
        <Examples.SelectPreview />
      </ContainerPreview>

      <ContainerPreview title="Componente Carousel">
        <Examples.CarouselPreview />
      </ContainerPreview>

      <ContainerPreview title="Componente DropDown">
        <Examples.DropDownPreview />
      </ContainerPreview>
    </div>
  )
}
