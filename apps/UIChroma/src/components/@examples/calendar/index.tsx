import { Calendar } from '@repo/ChromaUI/components'

const CalendarPreview = () => {
  return <Calendar onChange={() => console.log()} value={new Date()} />
}

export default CalendarPreview
