'use client'
import * as Examples from '@/components/@examples'
import { ContainerPreview } from './container'
import { useThemeStore } from '@/store/useThemeStore'
import { useEffect } from 'react'
import { updateCssVariables } from '@/utils/updateCssVariables'

export function ExempleComponents() {
  const { theme, lightColors, darkColors } = useThemeStore()

  useEffect(() => {
    updateCssVariables(theme, lightColors, darkColors)
  }, [theme, lightColors, darkColors])

  return (
    <div id="demo-container" className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* buttons preview */}
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
