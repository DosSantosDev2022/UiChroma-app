import { ImSpinner9 } from 'react-icons/im'

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="flex items-center justify-center space-x-2">
        <span className="text-lg font-semibold text-primary-foreground">
          Carregando...
        </span>
        <ImSpinner9 className="animate-spin text-3xl text-primary" />
      </div>
    </div>
  )
}

export { LoadingOverlay }
