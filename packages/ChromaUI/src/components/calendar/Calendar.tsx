'use client'
import { format, isSameDay } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import React from 'react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import { Button } from '../button/Button'
import { CalendarProps, useCalendar } from './../../hooks/useCalendar'

const Calendar = ({ value, onChange, range }: CalendarProps) => {
  const {
    nextMonth,
    prevMonth,
    currentDate,
    dates,
    selectedDate,
    startDate,
    endDate,
    handleSelectDate,
    isWithinSelectedRange
  } = useCalendar({ value, onChange, range })

  return (
    <div className="flex w-full max-w-80 flex-col items-center justify-center rounded-2xl border p-4 shadow-sm">
      <div className="mb-2 flex w-full items-center gap-2">
        <div className="flex w-full items-center justify-between gap-8 rounded-xl  border p-1 text-sm font-medium text-muted-foreground">
          <Button variants="ghost" sizes="icon" onClick={prevMonth}>
            <LuChevronLeft />
          </Button>
          <span className="capitalize">
            {format(currentDate, 'MMMM yyyy', { locale: ptBR })}
          </span>
          <Button variants="ghost" sizes="icon" onClick={nextMonth}>
            <LuChevronRight />
          </Button>
        </div>
      </div>
      <table className="w-full items-center justify-center pb-3">
        <thead className="mb-2">
          <tr className="flex">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map(
              (dayName) => (
                <td
                  key={dayName}
                  className="flex w-full items-center justify-center px-1 py-1.5"
                >
                  <p className="text-sm font-normal text-muted-foreground">
                    {dayName}
                  </p>
                </td>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Math.ceil(dates.length / 7) }).map(
            (_, weekIndex) => (
              <tr key={weekIndex} className="grid grid-cols-7">
                {dates
                  .slice(weekIndex * 7, weekIndex * 7 + 7)
                  .map((date, dateIndex) => {
                    const isCurrentMonth =
                      date.getMonth() === currentDate.getMonth()
                    const isSelected =
                      !range && selectedDate && isSameDay(date, selectedDate)
                    const isToday = isSameDay(date, new Date())
                    const isInRange =
                      range && startDate && endDate
                        ? isWithinSelectedRange(date)
                        : false
                    const isStart = startDate && isSameDay(date, startDate)
                    const isEnd = endDate && isSameDay(date, endDate)

                    return (
                      <td
                        key={dateIndex}
                        className=" flex h-10 w-10 items-center justify-center rounded-full"
                      >
                        <p
                          onClick={() => handleSelectDate(date)}
                          className={`flex h-full w-full cursor-pointer 
                            items-center justify-center rounded-full p-4 text-sm font-medium transition-all duration-200 hover:bg-accent-hover hover:text-accent-foreground
                            ${isCurrentMonth ? '' : 'text-muted'} 
                            ${isToday
                              ? 'bg-accent-foreground text-accent'
                              : isSelected
                                ? 'bg-accent text-accent-foreground'
                                : isStart || isEnd
                                  ? 'bg-accent-foreground text-accent'
                                  : isInRange
                                    ? 'bg-accent text-accent-foreground hover:bg-accent-hover'
                                    : ''
                            }`}
                        >
                          {date.getDate()}
                        </p>
                      </td>
                    )
                  })}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export { Calendar }

