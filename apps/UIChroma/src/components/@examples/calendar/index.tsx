import {Calendar} from '@repo/ChromaUI/components/calendar.tsx'

export default function calendarPreview() {
  return (
    <Calendar onChange={() => console.log()} value={new Date()}  />
  )
}