import { ImSpinner9 } from 'react-icons/im'

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-muted bg-opacity-50 backdrop-blur-sm">
      <div className="flex items-center justify-center space-x-2 text-primary">
        <span className="text-lg font-semibold">Carregando...</span>
        <ImSpinner9 className="animate-spin text-3xl text-accent" />
      </div>
    </div>
  )
}
