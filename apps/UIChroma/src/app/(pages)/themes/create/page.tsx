"use client";
import { Colors } from "@/@types/colorsState";
import { CodeBlock } from "@/components/global/codeBlock/codeBlock";
import { Title } from "@/components/global/title/title";
import { defaultColors } from "@/enums/colors";
import { generateCodeCss, generateTailwindConfig } from "@/utils/generateCode";
import { Button } from "@repo/ChromaUI/components/button/Button.tsx";
import { ClipBoardAction, ClipBoardArea, ClipBoardContainer, ClipBoardHeader, ClipBoardLabel } from "@repo/ChromaUI/components/clipboard/Clipboard.tsx";
import { useState } from "react";
import { SketchPicker } from "react-color";



export default function ThemeCreatePage() {
  const [colors, setColors] = useState<Colors>(defaultColors);
  const [activePickers, setActivePickers] = useState<{ [key: string]: boolean }>({});
  const [activeTab, setActiveTab] = useState<"globalcss" | "tailwindConfig">("globalcss")

  const handleColorChange = (color: any, key: keyof Colors) => {
    const { h, s, l } = color.hsl;
    setColors((prevColors) => ({
      ...prevColors,
      [key]: `hsl(${h.toFixed(1)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`,
    }));
  };

  const togglePicker = (key: string) => {
    setActivePickers((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="p-4 space-y-12">
      <div className="p-2 flex flex-col items-center justify-start gap-2">
        <Title className="text-6xl">Gerador de temas</Title>
        <p className="text-muted-foreground font-normal text-base">
          Crie temas incríveis para seus projetos
        </p>
      </div>

      <div className="grid grid-cols-12 gap-2 p-2">
        <section
          className="flex flex-col items-start space-y-3 px-6 py-3 col-span-7 max-h-[468px]
          shadow border overflow-y-auto custom-scrollbar"
        >
          {Object.keys(colors).map((key) => (
            <div
              key={key}
              className="relative flex flex-col border rounded-full w-full shadow-sm px-2 py-2.5"
            >
              <div
                onClick={() => togglePicker(key)}
                className="flex items-center justify-between gap-2 cursor-pointer active:scale-95 duration-500"
              >
                <label
                  htmlFor={key}
                  className="ml-4 font-semibold text-muted-foreground "
                >
                  {key.replace(/[A-Z]/g, " $&").toLowerCase()}
                </label>
                <div
                  className="w-8 h-8 rounded-full border border-border"
                  style={{ backgroundColor: colors[key as keyof Colors] }}
                />
              </div>
              {activePickers[key] && (
                <div
                  className="absolute top-full left-0 z-50 mt-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <SketchPicker
                    color={colors[key as keyof Colors]}
                    onChange={(color) => handleColorChange(color, key as keyof Colors)}
                  />
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="col-span-5 sticky max-h-[468px] overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-start gap-1 mb-1">
            <Button
              data-active={activeTab === "globalcss" ? "true" : "false"}
              onClick={() => setActiveTab("globalcss")}
              className={`active:scale-95 duration-500 ${activeTab === "globalcss" ? "text-primary-foreground bg-primary" : ""
                }`}
              variant="outline"
            >
              Global.css
            </Button>
            <Button
              data-active={activeTab === "tailwindConfig" ? "true" : "false"}
              onClick={() => setActiveTab("tailwindConfig")}
              className={`active:scale-95 duration-500 ${activeTab === "tailwindConfig"
                  ? "text-primary-foreground bg-primary"
                  : ""
                } w-28`}
              variant="outline"
            >
              Tailwind.config.ts
            </Button>
          </div>
          <ClipBoardContainer>
            <ClipBoardHeader>
              <ClipBoardLabel>
                Copiar {activeTab === "globalcss" ? "CSS" : "Tailwind Config"}
              </ClipBoardLabel>
              <ClipBoardAction
                copyText={
                  activeTab === "globalcss"
                    ? generateCodeCss(colors)
                    : generateTailwindConfig()
                }
              />
            </ClipBoardHeader>
            <ClipBoardArea>
              <CodeBlock
                code={
                  activeTab === "globalcss"
                    ? generateCodeCss(colors)
                    : generateTailwindConfig()
                }
              />
            </ClipBoardArea>
          </ClipBoardContainer>
        </section>
      </div>
    </div>
  );
}
