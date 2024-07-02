import { hooks } from '@/lib/hooks'
import { HeroComponents } from '@/components/global/heroComponents'
import { SelectState } from './selectState'
import { CodePreview } from '@/components/global/codePreview'

export default function UseStates() {
  const hook = hooks.find((hook) => hook.name === 'useState')

  const codeString = `
  
    'use client'
    import { useState, useEffect } from 'react'
    
    interface City {
      id: string
      nome: string
    }
    
    export interface States {
      cities: City[]
      id: string
      nome: string
    }
    
    type StatesData = States[]
    
    const useStatesBrasil = () => {
      const [data, setData] = useState<StatesData>([])
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
            )
            const states: States[] = await response.json()
            console.log(states)
            const statesWithCities = await Promise.all(
              states.map(async (state) => {
                const citiesResponse = await fetch(
                  \`https://servicodados.ibge.gov.br/api/v1/localidades/estados/\${state.id}/municipios\`
                );
                const cities: City[] = await citiesResponse.json();
                console.log(cities);
                return {
                  ...state,
                  cidades: cities,
                };
              })
            );
            setData(statesWithCities);
          } catch (error) {
            console.error('Error fetching data', error);
          }
        };
    
        fetchData();
      }, []);
    
      return data;
    };
    
    export default useStatesBrasil;
  `

  return (
    <>
      <HeroComponents
        content="Custom Hooks"
        name={hook?.name}
        description={hook?.description}
      />

      <div className="flex flex-col gap-32">
        <SelectState />

        <CodePreview codePreview={codeString} />
      </div>
    </>
  )
}
