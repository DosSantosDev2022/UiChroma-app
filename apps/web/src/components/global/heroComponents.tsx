interface HeroComponentsProps {
  content: string
  name: string | undefined
  description: string | undefined
}

export function HeroComponents({
  content,
  description,
  name,
}: HeroComponentsProps) {
  return (
    <div className=" flex w-full flex-col">
      <span className="bg-primary-950 text-secondary-50 w-40 rounded-lg px-4 py-2 text-center text-lg font-medium leading-[29px] ">
        {content}
      </span>
      <h1 className="text-primary-900 mt-6 text-5xl font-extrabold tracking-[2.16px] ">
        {name}
      </h1>
      <p className="text-primary-800 mt-4 w-[500px] text-base font-normal ">
        {description}
      </p>
    </div>
  )
}
