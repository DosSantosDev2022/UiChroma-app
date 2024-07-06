import { FaSpinner } from 'react-icons/fa'

export function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <FaSpinner className="animate-spin text-white" size={48} />
    </div>
  )
}
