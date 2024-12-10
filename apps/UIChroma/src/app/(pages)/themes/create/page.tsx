"use client";
import { Colors } from "@/@types/colorsState";
import { Title } from "@/components/global/title/title";
import { ExampleofColors } from "@/components/pages/themes/exampleofColors";
import { ExempleComponents } from "@/components/pages/themes/exempleComponents";
import { defaultColors } from "@/enums/colors";
import { generateTheme } from "@/utils/generateTheme";
import { useState } from "react";
import { ColorPicker } from "@/components/pages/themes/ColorPicker";
import { ModalCodeCss } from "@/components/pages/themes/ModalCodeCss";

export default function ThemeCreatePage() {
  const [colors, setColors] = useState<Colors>(defaultColors);

  const handleBaseColorChange = (color: any) => {
    const { hex } = color; // Usar o valor hexadecimal da cor
    const newTheme = generateTheme(hex); // Gerar tema baseado na cor
    setColors(newTheme.colors); // Atualizar estado com o novo tema
  };

  return (
    <div className="flex flex-col space-y-10">
      <section className="mx-auto relative  p-2">
        <div className="px-6 flex flex-col items-center justify-center gap-2 md:mb-6 mb-6">
          <div className="md:my-14 md:mb-8 space-y-4">
            <div className="text-center max-w-xl">
              <Title className="text-6xl">Gerador de temas</Title>
              <p className="text-muted-foreground font-normal text-base">
                Pressione a barra de espaço, digite um código hexadecimal ou altere o
                Valores HSL para criar uma escala de cores personalizada
              </p>
            </div>
            <div
              className="w-full flex items-center justify-center border"
            >
              <ColorPicker
                color={colors.primary}
                onChange={handleBaseColorChange}
              />

              <ModalCodeCss colors={colors} />
            </div>
          </div>
        </div>
        <ExampleofColors Colors={colors} />
      </section>
      <ExempleComponents colors={colors} />
    </div>
  );
}
