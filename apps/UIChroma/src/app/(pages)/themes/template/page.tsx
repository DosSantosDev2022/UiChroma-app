"use client";
import { Colors } from "@/@types/colorsState";
import { CodeBlock } from "@/components/global/codeBlock/codeBlock";
import { Title } from "@/components/global/title/title";
import { defaultColors } from "@/enums/colors";
import { themeTemplates } from "@/enums/templates";
import { generateCodeCss, generateTailwindConfig } from "@/utils/generateCode";
import { Button } from "@repo/ChromaUI/components/button/Button.tsx";
import { Label } from "@repo/ChromaUI/components/label/Label.tsx"
import { ClipBoardAction, ClipBoardArea, ClipBoardContainer, ClipBoardHeader, ClipBoardLabel } from "@repo/ChromaUI/components/clipboard/Clipboard.tsx";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Field, InputRoot } from "@repo/ChromaUI/components/input/Input.tsx";


export default function ThemeTemplatePage() {
  const [theme, setTheme] = useState('')
  const [templateColors, setTemplateColors] = useState<Colors>(defaultColors);
  const [activeTab, setActiveTab] = useState<"globalcss" | "tailwindConfig">("globalcss")

  const handleThemeChange = (theme: string) => {
    setTheme(theme); // Atualiza o estado do tema
  };

  const handleTemplateClick = (template: any) => {
    handleThemeChange(template.name); // Define o tema a partir do nome do template
    setTemplateColors(template.colors); // Define as cores do template selecionado
  };


  return (
    <div className="p-4 space-y-12">
      <Title>Templates prontos</Title>
      <div className="grid grid-cols-12 gap-2  p-2">
        <section className="col-span-4 p-4 border rounded-md shadow max-h-[468px] overflow-y-auto custom-scrollbar">

          <div className="flex flex-col space-y-2">
            {themeTemplates.map((template, index) => (
              <div
                key={index}
                className="w-[250px] p-4 border rounded-md cursor-pointer hover:shadow-md active:scale-95 duration-200"
                onClick={() => handleTemplateClick(template)}
              >
                <h4 className="font-medium flex items-center justify-between">
                  {template.name}
                  {template.colors && (
                    <FaCheck className="text-primary-foreground" />
                  )}
                </h4>
                <div className="mt-2 grid grid-cols-6 gap-1">
                  {["background", "foreground", "primary", "secondary", "accent", "danger"].map(
                    (variable, idx) => (
                      <div
                        key={idx}
                        className="w-6 h-6 rounded border"
                        style={{
                          backgroundColor: template.colors[variable as keyof Colors],
                        }}
                        title={variable}
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className=" col-span-8 sticky max-h-[468px] overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-start gap-1 mb-1">
            <Button
              data-active={activeTab === "globalcss" ? "true" : "false"}
              onClick={() => setActiveTab("globalcss")}
              className={`active:scale-95 duration-500 ${activeTab === "globalcss" ? "text-primary-foreground bg-primary" : ""}`}
              variant="outline"
            >
              Global.css
            </Button>
            <Button
              data-active={activeTab === "tailwindConfig" ? "true" : "false"}
              onClick={() => setActiveTab("tailwindConfig")}
              className={`active:scale-95 duration-500 ${activeTab === "tailwindConfig" ? "text-primary-foreground bg-primary" : ""} w-28`}
              variant="outline"
            >
              Tailwind.config.ts
            </Button>
          </div>
          <ClipBoardContainer>
            <ClipBoardHeader>
              <ClipBoardLabel>Copiar {activeTab === "globalcss" ? "CSS" : "Tailwind Config"}</ClipBoardLabel>
              <ClipBoardAction
                copyText={activeTab === 'globalcss' ? generateCodeCss(templateColors) : generateTailwindConfig()}
              />
            </ClipBoardHeader>
            <ClipBoardArea>
              <CodeBlock code={activeTab === 'globalcss' ? generateCodeCss(templateColors) : generateTailwindConfig()} />
            </ClipBoardArea>
          </ClipBoardContainer>
        </section>
      </div>



      {/* Demonstração em componentes */}
      <div data-theme={theme}>
        <Title as="h2" className="text-xl">
          Demonstração em componentes
        </Title>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Exemplo de botão */}
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold">Botões</h3>
            <div className="space-x-4 mt-2 flex">
              <Button>
                Primary
              </Button>
              <Button
              variant="secundary"
              >
                Secondary
              </Button>
              <Button
              variant="accent"
              >
                Accent
              </Button>
            </div>
          </div>

          {/* Exemplo de Card */}
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold">Cards</h3>
            <div
              className="p-6 rounded shadow-md bg-background"
            >
              <h4 className="font-bold"
              >Título do Card</h4>
              <p
                className="text-base"
              >
                Este é um exemplo de card que se adapta ao tema selecionado.
              </p>
            </div>
          </div>

          {/* Exemplo de forms */}

          <div className=" p-4 border rounded-md ">
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <Label className="">Your email</Label>
                <InputRoot
                >
                  <Field placeholder="chromaUi@email.com" />
                </InputRoot>
              </div>
              <div className="mb-5">
                <Label className="">Your password</Label>
                <InputRoot
                >
                  <Field placeholder="*******" />
                </InputRoot>
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <Field type="checkbox" placeholder="" />
                </div>
                <Label className="ms-2">Remember me</Label>
              </div>
              <Button
                type="submit"
                className="">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
