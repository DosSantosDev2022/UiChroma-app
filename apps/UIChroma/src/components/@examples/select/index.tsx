import {
  SelectContent,
  SelectOption,
  SelectProvider,
  SelectRoot,
  SelectTrigger
} from '@repo/ChromaUI/components'

const SelectPreview = () => {
  const options = [
    {
      label: 'Opção 01'
    },
    {
      label: 'Opção 02'
    },
    {
      label: 'Opção 03'
    },
    {
      label: 'Opção 04'
    },
    {
      label: 'Opção 05'
    }
  ]

  return (
    <SelectProvider>
      <SelectRoot>
        <SelectTrigger>Abrir select</SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectOption key={option.label}>{option.label}</SelectOption>
          ))}
        </SelectContent>
      </SelectRoot>
    </SelectProvider>
  )
}

export default SelectPreview
