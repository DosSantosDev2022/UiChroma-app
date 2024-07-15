"use client"

import { Button } from "@repo/ui/components/button.tsx"
import { ComponentInput,InputRoot } from "@repo/ui/components/input.tsx"
import { Label } from "@repo/ui/components/label.tsx"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/components/sheet.tsx"



const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export default function SheetSidePreview() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader className="mt-12">
              <SheetTitle>Editar perfil</SheetTitle>
              <SheetDescription>
              Faça alterações em seu perfil aqui. Clique em salvar quando terminar.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex flex-col w-full items-start gap-4">
                <Label htmlFor="name" className="">
                  Name
                </Label>
                <InputRoot className="w-full">
                <ComponentInput id="name" value="Pedro Duarte" className="w-full" />
                </InputRoot>
              </div>
              <div className="flex flex-col w-full items-start gap-4">
                <Label htmlFor="name" className="">
                  E-mail
                </Label>
                <InputRoot className="w-full">
                <ComponentInput id="name" value="email@exemplo.com" className="w-full" />
                </InputRoot>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
