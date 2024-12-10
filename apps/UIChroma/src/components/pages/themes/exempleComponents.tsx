'use client'
import { Colors } from "@/@types/colorsState";
import { Title } from "@/components/global/title/title";
import { Button } from "@repo/ChromaUI/components/button/Button.tsx";
import { Field, InputRoot } from "@repo/ChromaUI/components/input/Input.tsx";
import { Label } from "@repo/ChromaUI/components/label/Label.tsx";

interface ExempleComponentsProps {
  colors: Colors
}


export function ExempleComponents({ colors }: ExempleComponentsProps) {

  return (
    <div>
      <Title as="h2" className="text-xl">
        Demonstração em componentes
      </Title>

      
    </div>
  )
}