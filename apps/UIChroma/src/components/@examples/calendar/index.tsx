'use client'
import { Button, Calendar } from '@repo/ChromaUI/components'
import { useState } from 'react'

const CalendarPreview = () => {
  const [range, setRange] = useState(false)
  const [selectedDate, setSelectedDate] = useState<
    Date | { startDate: Date | null; endDate: Date | null } | null
  >(null)

  // Função para limpar a seleção de datas quando mudar o modo
  const handleModeRange = () => {
    setSelectedDate(null) // Limpa a seleção de data antes de alterar o modo
    setRange((prevRange) => !prevRange) // Alterna o modo de intervalo
  }

  // Função que atualiza a data selecionada
  const handleDateChange = (
    date: Date | { startDate: Date | null; endDate: Date | null } | null
  ) => {
    setSelectedDate(date)
  }

  // Função para renderizar as datas corretamente
  const renderSelectedDate = () => {
    if (selectedDate === null) return 'Nenhuma'
    if (selectedDate instanceof Date) {
      return selectedDate.toLocaleDateString() // Se for uma data única
    }
    // Se for um intervalo de datas
    const { startDate, endDate } = selectedDate
    return (
      <>
        {startDate?.toLocaleDateString()} -
        {endDate ? endDate.toLocaleDateString() : 'Sem data final'}
      </>
    )
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mb-10 flex w-full items-center justify-end gap-4 p-2">
        <p className=" text-center text-sm font-medium text-muted-foreground">
          {range ? 'Calendar com range de data' : 'Calendar com data única'}
        </p>
        <Button sizes="xs" variants="primary" onClick={handleModeRange}>
          Alterar
        </Button>
      </div>

      <div className="flex w-full flex-col items-center justify-center p-4">
        <h4 className="mb-4 text-xl font-bold text-foreground">
          Selecione uma Data
        </h4>
        <Calendar
          value={selectedDate} // Valor atualizado com a data
          onChange={handleDateChange} // Atualiza a data selecionada
          range={range} // Modo de intervalo
        />

        <p className="mt-4 text-sm text-muted-foreground">
          <span className="font-bold text-primary">Data Selecionada:</span>{' '}
          {renderSelectedDate()}
        </p>
      </div>
    </div>
  )
}

export default CalendarPreview
