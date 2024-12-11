import {
  Field,
  InputIcon,
  InputRoot
} from '@repo/chromaui/components/input/Input.tsx'
import { LuSearch } from 'react-icons/lu'

export default function InputPreview() {
  return (
    <InputRoot className="w-[468px] ">
      <InputIcon>
        <LuSearch />
      </InputIcon>
      <Field placeholder="Search.." />
    </InputRoot>
  )
}
