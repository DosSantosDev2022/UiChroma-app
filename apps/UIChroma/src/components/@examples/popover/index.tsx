import {
  PopoverContent,
  PopoverRoot,
  PopoverTrigger
} from '@repo/ChromaUI/components'

const PopoverPreview = () => {
  return (
    <PopoverRoot>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </PopoverRoot>
  )
}
export default PopoverPreview
