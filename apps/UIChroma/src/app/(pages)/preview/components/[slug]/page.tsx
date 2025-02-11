import { inter } from '@/assets/fonts'
import { CodeBlock } from '@/components/global/codeBlock/codeBlock'
import { NavigateThroughSections } from '@/components/global/NavigateThroughSections'
import { Title } from '@/components/global/title'
import ComponentPreview from '@/components/pages/preview/component-Preview'
import { DocLinks } from '@/components/pages/preview/doc-Links'
import { GET_DETAILS_COMPONENT } from '@/services/get-Details-Component'
import {
  Badge,
  ClipBoardAction,
  ClipBoardArea,
  ClipBoardContainer,
  ClipBoardHeader,
  ClipBoardLabel
} from '@repo/ChromaUI/components'

import { redirect } from 'next/navigation'
import { FaCircleCheck } from 'react-icons/fa6'

export default async function ComponentDetails({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { pageComponent } = await GET_DETAILS_COMPONENT(slug)

  if (!pageComponent) {
    redirect('/not-found')
  }

  if (pageComponent.developing) {
    return (
      <div className="flex h-full w-full items-center justify-center border border-border p-14">
        <div className="flex w-full flex-col items-center justify-center space-y-3 text-center">
          <h1 className=" text-4xl font-bold text-foreground">
            {pageComponent.name} está em desenvolvimento 🚧
          </h1>
          <p className="mt-2 max-w-[720px] font-normal text-muted-foreground">
            Este componente ainda está em desenvolvimento ou em manutenção,
            estamos trabalhando para disponibiliza-lo o mais breve possível.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
      <section className="col-span-3 w-full rounded-md  border border-border p-3 shadow-sm sm:p-4">
        <div className="space-y-10 pb-0 pt-0">
          <div id="start">
            <div className="flex w-full flex-col">
              <div className="mt-2 flex  items-center justify-between gap-3 sm:justify-start">
                <Title className={`${inter.className}`}>
                  {pageComponent.name}
                </Title>
                <Badge
                  variant="accent"
                  size="md"
                  children={`v.${pageComponent.version}`}
                />
              </div>
              <p className="mt-2.5 w-full text-base font-normal text-muted-foreground sm:max-w-[500px]">
                {pageComponent.description}
              </p>
            </div>
            <DocLinks links={pageComponent.docsLinks} />
          </div>

          <div id="features">
            <div className="w-full space-y-4">
              <Title as="h3" className={`${inter.className}`}>
                Features
              </Title>
              <ul className="flex flex-col items-start gap-2">
                {pageComponent.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaCircleCheck className="text-primary" size={18} />
                    <span className="text-base font-bold">{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div id="preview" className="space-y-10">
              <Title as="h3" className={`${inter.className}`}>
                Preview
              </Title>

              <ComponentPreview componentData={pageComponent} />
            </div>

            <div id="copyCode" className="space-y-4">
              <div className="space-y-2">
                <Title as="h3" className={`${inter.className}`}>
                  {pageComponent.sourceCode?.title}
                </Title>
                <p className="text-base font-normal text-muted-foreground">
                  {pageComponent.sourceCode.description}
                </p>
              </div>
              <ClipBoardContainer>
                <ClipBoardHeader>
                  <ClipBoardLabel>Copiar componente</ClipBoardLabel>
                  <ClipBoardAction
                    copyText={pageComponent.sourceCode?.blockCode || ''}
                  />
                </ClipBoardHeader>
                <ClipBoardArea>
                  <CodeBlock code={pageComponent.sourceCode?.blockCode || ''} />
                </ClipBoardArea>
              </ClipBoardContainer>
            </div>

            {pageComponent.utilities && (
              <div id="utilities" className="space-y-4 ">
                <div className="space-y-2">
                  <Title as="h3" className={`${inter.className}`}>
                    Utilidades
                  </Title>
                  <p className="text-base font-normal text-muted-foreground">
                    {pageComponent.utilities.description}
                  </p>
                </div>

                <ClipBoardContainer>
                  <ClipBoardHeader>
                    <ClipBoardLabel>Copiar utilidades</ClipBoardLabel>
                    <ClipBoardAction
                      copyText={pageComponent.utilities?.blockCode || ''}
                    />
                  </ClipBoardHeader>
                  <ClipBoardArea>
                    <CodeBlock
                      code={pageComponent.utilities?.blockCode || ''}
                    />
                  </ClipBoardArea>
                </ClipBoardContainer>
              </div>
            )}

            <div id="toUse" className="space-y-4">
              <div className="space-y-2">
                <Title as="h3" className={`${inter.className}`}>
                  {pageComponent.sampleCode.title}
                </Title>
                <p className="text-base font-normal text-muted-foreground">
                  {pageComponent.sampleCode.description}
                </p>
              </div>

              <ClipBoardContainer>
                <ClipBoardHeader>
                  <ClipBoardLabel>
                    {pageComponent.sampleCode?.title}
                  </ClipBoardLabel>
                  <ClipBoardAction
                    copyText={pageComponent.sampleCode?.blockCode || ''}
                  />
                </ClipBoardHeader>
                <ClipBoardArea>
                  <CodeBlock code={pageComponent.sampleCode?.blockCode || ''} />
                </ClipBoardArea>
              </ClipBoardContainer>
            </div>
          </div>

          {pageComponent.dependencies && (
            <div id="dependencies" className="space-y-4">
              <Title as="h3" className={`${inter.className}`}>
                Dependencias
              </Title>
              {pageComponent.dependencies.map((dep) => (
                <div
                  className="flex w-full flex-col items-start gap-4"
                  key={dep.id}
                >
                  <p className="flex items-center gap-3 text-base font-normal text-muted-foreground">
                    {dep.description}
                  </p>

                  <ClipBoardContainer>
                    <ClipBoardHeader>
                      <ClipBoardLabel>{dep.title}</ClipBoardLabel>
                      <ClipBoardAction copyText={dep.command} />
                    </ClipBoardHeader>
                    <ClipBoardArea>
                      <CodeBlock code={dep.command} />
                    </ClipBoardArea>
                  </ClipBoardContainer>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="sticky top-0 col-span-1 hidden h-screen w-full space-y-2 border border-border px-8 py-5 shadow-sm lg:block">
        <NavigateThroughSections
          links={pageComponent.navigateThroughSections}
        />
      </section>
    </div>
  )
}
