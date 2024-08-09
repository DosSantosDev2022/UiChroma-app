import { inter } from "@/assets/fonts"

interface HeroComponentsProps {
  type: string
  name: string | undefined
  description: string | undefined
}

export function HeroComponents({
  type,
  description,
  name,
}: HeroComponentsProps) {
  return (
    <div className=" flex w-full flex-col">
      <span className="bg-primary-950 text-secondary-50 w-28 rounded-lg px-1.5 py-2 text-center text-base font-medium leading-[29px] ">
        {type}
      </span>
      <h1 className={`text-primary-900 mt-6 text-4xl font-extrabold ${inter.className}`} >
        {name}
      </h1>
      <p className="text-primary-800 mt-4 w-[500px] text-base font-normal ">
        {description}
      </p>
    </div>
  )
}
