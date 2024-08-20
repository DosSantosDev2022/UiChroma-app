import LogoUI from '@/assets/icons/Logo'
import { NaigationLinks } from '@/components/navLinks/navLinks'

export function SideBar() {
  return (
    <aside className="flex h-full flex-col justify-between bg-primary-950 col-start-1 row-span-2">
      <div className="flex flex-col gap-4 p-4 lg:p-8 lg:pt-4 overflow-y-auto scrollbar-thin scrollbar-track-primary-800 scrollbar-thumb-primary-950">
        <div className="flex w-full items-center justify-between gap-4 px-2 py-1">
          <LogoUI />
          <span className="flex items-center justify-center rounded-2xl bg-primary-700 px-2 py-1.5 text-xs font-medium">
            V.1.0.0
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <NaigationLinks />
        </div>
      </div>

      <div className="flex w-full flex-col items-center p-4 text-center text-xs font-light tracking-wide text-secondary-50/70">
        <span>© 2024 DosSantosDev.</span>
        <span>Todos os direitos reservados.</span>
      </div>
    </aside>
  )
}
