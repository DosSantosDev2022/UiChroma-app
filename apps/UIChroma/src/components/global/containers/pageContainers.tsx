import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

function MainContainer({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-4 gap-4">{children}</div>
}

function SectionPage({ children }: { children: ReactNode }) {
  return (
    <section className="col-span-3 w-full rounded-md  border p-4">
      {children}
    </section>
  )
}

function WrapperSections({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={twMerge(' space-y-20  pb-10 pt-8', className)}>
      {children}
    </div>
  )
}

function ContentSections({
  children,
  id
}: {
  children?: ReactNode
  id?: string
}) {
  return (
    <div id={id} className="flex flex-col gap-3">
      {children}
    </div>
  )
}

function SectionNavigation({ children }: { children?: ReactNode }) {
  return (
    <section className="sticky top-0 col-span-1 h-screen w-full space-y-6 border px-8 py-5">
      {children}
    </section>
  )
}

export {
  MainContainer,
  SectionPage,
  SectionNavigation,
  WrapperSections,
  ContentSections
}
