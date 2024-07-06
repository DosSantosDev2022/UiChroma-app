'use client'
import useStatesBrasil, { States } from '@/hooks/useStates'
import { ChangeEvent, useState } from 'react'

export function SelectState() {
  const [selectState, setSelectState] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const statesAndCity: States[] = useStatesBrasil()

  const handleStateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectState(event.target.value)
    setSelectedCity('')
  }

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
  }

  const selectedState = statesAndCity.find(
    (state) => state.nome === selectState,
  )
  console.log(statesAndCity)
  return (
    <div className="mt-10 flex flex-col border p-6">
      <select
        value={selectState}
        onChange={handleStateChange}
        className="w-60 bg-cyan-700 "
      >
        <option value={''} className="p-2">
          Selecione um estado
        </option>
        {statesAndCity.map((state) => (
          <option className="text-black" value={state.nome} key={state.id}>
            {state.nome}
          </option>
        ))}
      </select>

      <select
        value={selectedCity}
        onChange={handleCityChange}
        className="w-60 bg-cyan-700"
      >
        <option value="">Selecione uma cidade</option>
        {selectedState && selectedState.cities ? (
          selectedState.cities.map((city) => (
            <option className="text-black" key={city.id} value={city.nome}>
              {city.nome}
            </option>
          ))
        ) : (
          <option className="text-black" value="" disabled>
            Nenhuma cidade encontrada
          </option>
        )}
      </select>
    </div>
  )
}
