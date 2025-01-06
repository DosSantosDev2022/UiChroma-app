import { Input } from '@repo/ChromaUI/components'
import { CiSearch } from 'react-icons/ci'

const InputPreview = () => {
  return (
    <Input
      variants="default"
      icon={<CiSearch size={20} />}
      placeholder="Buscar.."
    />
  )
}

export default InputPreview
