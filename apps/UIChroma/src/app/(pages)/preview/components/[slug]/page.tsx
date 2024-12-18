import { inter } from '@/assets/fonts'
import { CodeBlock } from '@/components/global/codeBlock/codeBlock'
import {
  MainContainer,
  SectionNavigation,
  SectionPage,
  WrapperSections
} from '@/components/global/containers/pageContainers'
import { NavigateThroughSections } from '@/components/global/navigationScroll/NavigateThroughSections'
import { Title } from '@/components/global/title/title'
import { DocLinks } from '@/components/pages/home/documentationslink/docLinks'
import ComponentPreview from '@/components/pages/preview/componentPreview/componentPreview'
import { links } from '@/enums/preview'
import { GET_DETAILS_COMPONENT } from '@/utils/getDetailsComponentData'
import { Badge } from '@repo/chromaui/components/bedge/Bedge.tsx'
import {
  ClipBoardAction,
  ClipBoardArea,
  ClipBoardContainer,
  ClipBoardHeader,
  ClipBoardLabel
} from '@repo/chromaui/components/clipboard/Clipboard.tsx'
import { redirect } from 'next/navigation'
import { FaCircleCheck } from 'react-icons/fa6'

interface ComponentDetailsProps {
  params: {
    slug: string
  }
}

export default async function ComponentDetails({
  params
}: ComponentDetailsProps) {
  const { slug } = await params

  const { pageComponent } = await GET_DETAILS_COMPONENT(slug)

  if (!pageComponent) {
    redirect('/not-found')
  }

  return (
    <MainContainer>
      <SectionPage>
        <WrapperSections className="space-y-10 pb-0 pt-0">
          <div id="Início">
            <div className=" flex w-full flex-col">
              <div className="mt-6 flex  items-center justify-start gap-3">
                <Title className={`${inter.className}`}>
                  {pageComponent.name}
                </Title>
                <Badge variant="primary" children={pageComponent.version} />
              </div>
              <p className="mt-4 max-w-[500px] text-base font-normal text-muted-foreground ">
                {pageComponent.description}
              </p>
            </div>
            <DocLinks links={pageComponent.docsLinks} />
          </div>

          <div id="Features">
            <div className="w-full space-y-4">
              <Title as="h3" className={`${inter.className}`}>
                Features
              </Title>
              <ul className="flex flex-col items-start gap-2">
                {pageComponent.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-foreground"
                  >
                    <FaCircleCheck className="text-primary" size={18} />
                    <span className="font-bold">{feature.name}:</span>
                    <span className="text-muted-foreground">
                      {feature.description}{' '}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div id="Preview" className="space-y-4">
              <Title as="h3" className={`${inter.className}`}>
                Preview
              </Title>
              <div className="flex  h-full w-full flex-shrink-0 items-start justify-center rounded-lg border bg-transparent p-8 shadow-sm">
                <ComponentPreview componentData={pageComponent} />
              </div>
            </div>

            <div id="CopyCode" className="space-y-4">
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
              <div id="Utilidades" className="space-y-4 ">
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

            <div id="Como usar" className="space-y-4">
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
            <div id="Dependencias" className="space-y-4">
              <Title as="h3" className={`${inter.className}`}>
                Dependências
              </Title>
              {pageComponent.dependencies.map((dep) => (
                <div
                  className="flex w-full flex-col items-start gap-4 text-zinc-600"
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
        </WrapperSections>
      </SectionPage>

      <SectionNavigation>
        <Title as="h3" className="text-lg">
          Navegue nessa página
        </Title>

        <NavigateThroughSections links={links} />
      </SectionNavigation>
    </MainContainer>
  )
}
