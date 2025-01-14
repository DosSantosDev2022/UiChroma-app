'use client'

import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

interface ComponentData {
  name: string
}

interface Props {
  componentData: ComponentData
}

const ComponentPreview: React.FC<Props> = ({ componentData }) => {
  const [Component, setComponent] = useState<React.FC | null>(null)
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>(
    'desktop'
  )
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  const VIEWPORT_SIZES = {
    desktop: { width: '100%', height: '800px' },
    tablet: { width: '768px', height: '1024px' },
    mobile: { width: '375px', height: '667px' }
  }

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

  // Função para atualizar o tamanho da visualização
  const handleViewportChange = (mode: 'mobile' | 'tablet' | 'desktop') => {
    setViewMode(mode)
  }

  useEffect(() => {
    if (iframeRef.current && Component) {
      const iframeDocument = iframeRef.current.contentDocument
      if (iframeDocument) {
        iframeDocument.body.innerHTML = '' // Limpa o conteúdo do iframe
        const componentElement = React.createElement(Component)
        const container = document.createElement('div')
        iframeDocument.body.appendChild(container)

        // Adicionando o CSS local do Tailwind diretamente no iframe
        const styleElement = iframeDocument.createElement('link')
        styleElement.rel = 'stylesheet'
        styleElement.href = '/_next/static/css/app/layout.css' // Ajuste para o caminho correto do seu CSS
        iframeDocument.head.appendChild(styleElement)

        // Renderiza o componente dentro do iframe usando createRoot
        const root = ReactDOM.createRoot(container)
        root.render(componentElement)
      }
    }
  }, [Component, viewMode])

  if (!Component) {
    return (
      <div className="flex items-center justify-center gap-2">
        <span>Carregando preview</span>
        <AiOutlineLoading3Quarters className="animate-spin" />
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col items-center justify-center p-2 shadow-sm">
      {/* View Mode Selection */}
      <div className="mb-4 flex w-full items-center gap-2 rounded-md border p-4">
        {(['desktop', 'tablet', 'mobile'] as const).map((mode) => (
          <button
            key={mode}
            className={`rounded border px-4 py-2 duration-300 active:scale-95 ${viewMode === mode
                ? 'bg-accent text-accent-foreground'
                : 'bg-secondary text-secondary-foreground'
              }`}
            onClick={() => handleViewportChange(mode)}
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </button>
        ))}
      </div>

      {/* Component Preview */}
      <div
        className="rounded border p-1 shadow"
        style={{
          width: VIEWPORT_SIZES[viewMode].width,
          height: VIEWPORT_SIZES[viewMode].height,
          transition: 'width 0.3s ease, height 0.3s ease'
        }}
      >
        <iframe
          ref={iframeRef}
          title="Componente Preview"
          className="h-full w-full overflow-hidden"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            overflow: 'auto',
            transition: 'width 0.3s ease'
          }}
        />
      </div>
    </div>
  )
}

export default ComponentPreview
