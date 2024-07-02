import { LuSearch } from 'react-icons/lu'
import {
  InputRoot,
  InputIcon,
  ComponentInput,
} from '@repo/ui/components/input.tsx'

export default function InputPreview() {
  return (
    <InputRoot className="w-[468px] ">
      <InputIcon>
        <LuSearch />
      </InputIcon>
      <ComponentInput placeholder="Search.." />
    </InputRoot>
  )
}
