import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const MainContainer = ({ children }: { children: ReactNode }) => {
  return <div className="grid grid-cols-4 gap-4">{children}</div>
}

const SectionPage = ({ children }: { children: ReactNode }) => {
  return (
    <section className="col-span-3 w-full rounded-md  border border-border p-4 shadow-sm">
      {children}
    </section>
  )
}

const WrapperSections = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={twMerge(' space-y-10  pb-10 pt-8', className)}>
      {children}
    </div>
  )
}

const ContentSections = ({
  children,
  id
}: {
  children?: ReactNode
  id?: string
}) => {
  return (
    <div id={id} className="flex flex-col gap-2">
      {children}
    </div>
  )
}

const SectionNavigation = ({ children }: { children?: ReactNode }) => {
  return (
    <section className="sticky top-0 col-span-1 h-screen w-full space-y-2 border border-border px-8 py-5 shadow-sm">
      {children}
    </section>
  )
}

export {
  ContentSections,
  MainContainer,
  SectionNavigation,
  SectionPage,
  WrapperSections
}
