import LogoUI from '@/assets/icons/Logo'
import { NaigationLinks } from '@/components/global/navLinks/navLinks'

export function SideBar() {
  return (
    <aside className="col-start-1 row-span-2 flex h-full flex-col justify-between border bg-background">
      <div className="custom-scrollbar flex flex-col gap-4 overflow-y-auto p-4">
        <div className="flex w-full items-center justify-between gap-4 px-2 py-1">
          <LogoUI />
          <span className="flex items-center justify-center rounded-2xl border bg-accent px-2 py-1.5 text-xs font-medium text-accent-foreground">
            V.1.0.0
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <NaigationLinks />
        </div>
      </div>

      <div className="text-neutral flex w-full flex-col items-center p-4 text-center text-xs font-light tracking-wide">
        <span>© 2024 DosSantosDev.</span>
        <span>Todos os direitos reservados.</span>
      </div>
    </aside>
  )
}
