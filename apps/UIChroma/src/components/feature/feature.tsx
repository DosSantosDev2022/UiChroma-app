import { FaCircleCheck } from 'react-icons/fa6'

interface FeatureProps {
  feature: {
    id: string
    item: string
  }[]
}

export function Feature({ feature }: FeatureProps) {
  return (
    <>
      <div className="w-full space-y-4">
        <h1 className="mt-10 text-3xl font-extrabold tracking-[2.16px] text-primary-900 ">
          Features
        </h1>

        <div>
          <ul className="flex flex-col items-start gap-2">
            {feature.map((f) => (
              <li
                key={f.id}
                className="flex items-center gap-2 text-primary-800"
              >
                <FaCircleCheck size={18} />
                {f.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
