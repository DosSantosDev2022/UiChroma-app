import { Calendar } from '@repo/chromaui/components/calendar/Calendar.tsx'

export default function calendarPreview() {
  return <Calendar onChange={() => console.log()} value={new Date()} />
}
