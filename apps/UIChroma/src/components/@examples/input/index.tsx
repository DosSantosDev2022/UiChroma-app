import { Field, InputIcon, InputRoot } from '@repo/ChromaUI/components'
import { LuSearch } from 'react-icons/lu'

const InputPreview = () => {
  return (
    <InputRoot className="w-[468px] ">
      <InputIcon>
        <LuSearch />
      </InputIcon>
      <Field placeholder="Search.." />
    </InputRoot>
  )
}

export default InputPreview
