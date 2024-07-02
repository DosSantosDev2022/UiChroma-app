import LogoUI from '@/assets/icons/Logo'
import { NaigationLinks } from './navLinks'

export function SideBar() {
  return (
    <aside className="flex  h-screen w-72 flex-col items-start gap-4 overflow-y-auto bg-primary-950 px-4 py-2 scrollbar-thin scrollbar-track-primary-800  scrollbar-thumb-primary-950 ">
      <div className="flex  w-full items-center justify-between gap-4  px-2 py-1">
        <LogoUI />
        <span className="flex items-center justify-center rounded-2xl bg-primary-700 px-2 py-1.5 text-xs font-medium">
          V.1.0.0
        </span>
      </div>

      <div className=" flex h-screen w-full flex-col gap-6 ">
        <NaigationLinks />
      </div>

      <div className="w-full text-center">
        <span className="w-full px-1  py-2 text-center text-xs font-light tracking-wide text-secondary-50/70">
          © 2024 DosSantosDev. Todos os direitos reservados.
        </span>
      </div>
    </aside>
  )
}
