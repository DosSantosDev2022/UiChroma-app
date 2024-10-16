import {DatePicker} from '@repo/ui/components/datepicker.tsx'

export default function datepickerPreview() {
  return (
    <DatePicker onChange={() => console.log()} value={new Date()}  />
  )
}