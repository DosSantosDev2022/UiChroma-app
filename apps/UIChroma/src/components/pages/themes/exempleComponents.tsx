'use client'
import { Colors } from '@/@types/colorsState'
import * as Examples from '@/components/@examples'
import { useThemeStore } from '@/store/useThemeStore'
import { updateCssVariables } from '@/utils/stylesComponents'
import { useEffect } from 'react'
import { ContainerPreview } from './container'

interface ExempleComponentsProps {
  lightColors: Colors['light']
  darkColors: Colors['dark']
}

export function ExempleComponents() {
  const { darkColors, lightColors } = useThemeStore()
  useEffect(() => {
    updateCssVariables(lightColors, darkColors)
  }, [lightColors, darkColors])

  return (
    <div id="demo-container" className="border px-6 py-4">
      <div className="grid grid-cols-1 gap-6  lg:grid-cols-2">
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
    </div>
  )
}
