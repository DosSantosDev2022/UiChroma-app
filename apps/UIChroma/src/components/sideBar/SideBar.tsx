import LogoUI from '@/assets/icons/Logo'
import { NaigationLinks } from '@/components/navLinks/navLinks'

export function SideBar() {
  return (
    <aside className="flex  h-screen flex-col items-start justify-between gap-4 overflow-y-auto bg-primary-950 scrollbar-thin scrollbar-track-primary-800 scrollbar-thumb-primary-950 lg:w-72 lg:p-8 lg:px-6 lg:pt-4  xl:w-80 ">
      <div className="flex  w-full items-center justify-between gap-4  px-2 py-1">
        <LogoUI />
        <span className="flex items-center justify-center rounded-2xl bg-primary-700 px-2 py-1.5 text-xs font-medium">
          V.1.0.0
        </span>
      </div>

      <div className=" flex h-screen  w-full flex-col gap-6  ">
        <NaigationLinks />
      </div>

      <div className="flex w-full flex-col px-1 py-2 text-center text-xs font-light tracking-wide text-secondary-50/70 ">
        <span className="w-full   ">© 2024 DosSantosDev.</span>
        <span>Todos os direitos reservados.</span>
      </div>
    </aside>
  )
}
