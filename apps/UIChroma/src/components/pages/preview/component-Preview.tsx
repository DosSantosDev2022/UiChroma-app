'use client'
import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

interface ComponentPreviewProps {
  componentData: {
    name: string
  }
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  componentData
}) => {
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

  return (
    <div className="flex flex-col items-center justify-center border border-border p-6 shadow-sm">
      <Component />
    </div>
  )
}

export default ComponentPreview
