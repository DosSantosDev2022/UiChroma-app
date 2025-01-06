'use client'
import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

interface ComponentData {
  name: string
}

interface Props {
  componentData: ComponentData
}

const ComponentPreview: React.FC<Props> = ({ componentData }) => {
  const [Component, setComponent] = useState<React.FC | null>(null)

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const importedComponent = await import(
          `@/components/@examples/${componentData.name.toLowerCase()}`
        )
        setComponent(() => importedComponent.default)
      } catch (error) {
        console.error('Error loading component:', error)
      }
    }

    loadComponent()
  }, [componentData.name])

  if (!Component) {
    return (
      <div className="flex items-center justify-center gap-2">
        <span>Carregando preview</span>
        <AiOutlineLoading3Quarters className="animate-spin" />
      </div>
    )
  }

  return <Component />
}

export default ComponentPreview
