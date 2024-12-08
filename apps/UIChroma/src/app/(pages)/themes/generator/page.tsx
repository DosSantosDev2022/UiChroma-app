"use client";
import { ColorsState } from "@/@types/colorsState";
import { CodeBlock } from "@/components/global/codeBlock/codeBlock";
import { Title } from "@/components/global/title/title";
import { generateCodeCss, generateTailwindConfig } from "@/utils/generateCode";
import { Button } from "@repo/ChromaUI/components/button/Button.tsx";
import { ClipBoardAction, ClipBoardArea, ClipBoardContainer, ClipBoardHeader, ClipBoardLabel } from "@repo/ChromaUI/components/clipboard/Clipboard.tsx";
import { useState } from "react";
import { SketchPicker } from "react-color";


export default function ThemeGeneratorPage() {
  const [colors, setColors] = useState<ColorsState>({
    background: '',
    foreground: '',
    card: '',
    cardForeground: '',
    popover: '',
    popoverForeground: '',
    primary: '',
    primaryForeground: '',
    secondary: '',
    secondaryForeground: '',
    muted: '',
    mutedForeground: '',
    accent: '',
    accentForeground: '',
    destructive: '',
    destructiveForeground: '',
    border: '',
    input: '',
    ring: '',
    chart1: '',
    chart2: '',
    chart3: '',
    chart4: '',
    chart5: '',
    darkBackground: '',
    darkForeground: '',
    darkCard: '',
    darkCardForeground: '',
    darkPopover: '',
    darkPopoverForeground: '',
    darkPrimary: '',
    darkPrimaryForeground: '',
    darkSecondary: '',
    darkSecondaryForeground: '',
    darkMuted: '',
    darkMutedForeground: '',
    darkAccent: '',
    darkAccentForeground: '',
    darkDestructive: '',
    darkDestructiveForeground: '',
    darkBorder: '',
    darkInput: '',
    darkRing: '',
    darkChart1: '',
    darkChart2: '',
    darkChart3: '',
    darkChart4: '',
    darkChart5: ''
  });

  const [activePickers, setActivePickers] = useState<{ [key: string]: boolean }>({});
  const [activeTab, setActiveTab] = useState<"globalcss" | "tailwindConfig">("globalcss")

  const handleColorChange = (color: any, key: keyof ColorsState) => {
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
      <Title>Gerador de temas</Title>


      <div className="grid grid-cols-12 gap-2  p-2">
        <section className="flex flex-col items-start space-y-4 p-2 col-span-4 max-h-[468px]
        shadow border overflow-y-auto custom-scrollbar">
          {Object.keys(colors).map((key) => (
            <div key={key} className="flex flex-col border rounded-md w-full shadow-sm px-2 py-2.5">
              <div
                onClick={(() => togglePicker(key))}
                className="flex items-center justify-between gap-2 cursor-pointer active:scale-95 duration-500">
                <label htmlFor={key} className="mb-2 font-semibold text-muted-foreground ">
                  {key.replace(/[A-Z]/g, " $&").toLowerCase()}
                </label>
                <div
                  className="w-8 h-8 rounded-full border border-border"
                  style={{ backgroundColor: colors[key as keyof ColorsState] }}
                />
              </div>
              {activePickers[key] && (
                <SketchPicker
                  className="mt-2"
                  color={colors[key as keyof ColorsState]}
                  onChange={(color) => handleColorChange(color, key as keyof ColorsState)}
                />
              )}
            </div>
          ))}
        </section>

        <section className=" col-span-8 sticky max-h-[468px] overflow-y-auto custom-scrollbar">
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
              className={`active:scale-95 duration-500 ${activeTab === "tailwindConfig" ? "text-primary-foreground bg-primary" : ""
                } w-28`}
              variant="outline"
            >
              Tailwind.config.ts
            </Button>
          </div>
          <ClipBoardContainer>
            <ClipBoardHeader>
              <ClipBoardLabel>Copiar {activeTab === "globalcss" ? "CSS" : "Tailwind Config"}</ClipBoardLabel>
              <ClipBoardAction
                copyText={activeTab === 'globalcss' ? generateCodeCss(colors) : generateTailwindConfig()}
              />
            </ClipBoardHeader>
            <ClipBoardArea>
              <CodeBlock code={activeTab === 'globalcss' ? generateCodeCss(colors) : generateTailwindConfig()} />
            </ClipBoardArea>
          </ClipBoardContainer>
        </section>
      </div>
    </div>
  );
}
