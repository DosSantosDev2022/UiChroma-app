
import { inter } from '@/assets/fonts'
import { CodeBlock } from '@/components/codeBlock'
import ComponentPreview from '@/components/componentPreview/componentPreview'
import { DocLinks } from '@/components/documentationslink/docLinks'
import { NavigateThroughSections } from '@/components/navigationScroll/NavigateThroughSections'
import { pagesectionlinks } from '@/config/navigationLinks'
import { GET_DETAILS_COMPONENT } from '@/utils/Get_Details_Components'
import {
  ClipBoardAction,
  ClipBoardArea,
  ClipBoardContainer,
  ClipBoardHeader,
  ClipBoardLabel,
} from '@repo/ChromaUI/components/clipboard/Clipboard.tsx'
import { FaCircleCheck } from 'react-icons/fa6'


interface ComponentDetailsProps {
  params: {
    slug: string
  }
}

export default async function ComponentDetails({
  params,
}: ComponentDetailsProps) {
  const { pageComponent } = await GET_DETAILS_COMPONENT(params.slug)

  if (!pageComponent) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <span className="text-center text-4xl font-bold text-zinc-600">
          Preview não disponível para este componente.
        </span>
        <p className="mt-2 w-[768px]  p-2 text-center text-zinc-500">
          Este componente ainda está em desenvolvimento, estamos trabalhando
          para garantir um componente bem elaborado e construído com as melhores
          práticas do mercado, assim garantimos também que o seu projeto esteja
          em alto nível.
        </p>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-4 gap-4'>
      <section className="px-8 py-5 col-span-3  w-full border rounded-md shadow-sm ">
        <div id='inicio'>
          <div className=" flex w-full flex-col">
            <div className='flex mt-6  items-center justify-start gap-3'>
              <h1 className={`text-foreground text-4xl font-extrabold ${inter.className}`} >
                {pageComponent.name}
              </h1>
              <span className='bg-primary text-primary-foreground rounded-lg px-2 py-1.5 text-sm'>{`v${pageComponent.version}`} </span>
            </div>
            <p className="text-muted-foreground mt-4 max-w-[500px] text-base font-normal ">
              {pageComponent.description}
            </p>
          </div>
          <DocLinks links={pageComponent.docsLinks} />
        </div>

        <div id='feature'>
          <div className="w-full space-y-4">
            <h4 className={`mt-10 text-3xl font-extrabold tracking-[2.16px]
               text-foreground ${inter.className}`} >
              Features
            </h4>
            <ul className="flex flex-col items-start gap-2">
              {pageComponent.features.map((feature, index) => (

                <li
                  key={index}
                  className="flex items-center gap-2 text-foreground"
                >
                  <FaCircleCheck className='text-primary' size={18} />
                  {feature.name}
                </li>

              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div id='preview' className="space-y-4">
            <h4 className={`mt-10 text-3xl font-extrabold tracking-[2.16px] text-foreground ${inter.className}`} >
              Preview
            </h4>
            <div className="bg-transparent  flex h-full w-full flex-shrink-0 items-start justify-center rounded-lg border p-8 shadow-sm">
              <ComponentPreview componentData={pageComponent} />
            </div>
          </div>

          <div id="copyCode" className='space-y-4'>
            <div className='space-y-2'>
              <h4 className={`mt-10 text-3xl font-extrabold tracking-[2.16px] text-foreground ${inter.className}`} >
                {pageComponent.sourceCode?.title}
              </h4>
              <p className='text-base font-normal text-muted-foreground'>
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
                <CodeBlock
                  code={pageComponent.sourceCode?.blockCode || ''}
                />
              </ClipBoardArea>
            </ClipBoardContainer>
          </div>

          {pageComponent.utilities && (
            <div id="utilities" className='space-y-4 '>
              <div className='space-y-2'>
                <h4 className={`mt-10 text-3xl font-extrabold tracking-[2.16px] text-foreground ${inter.className}`} >
                  Utilidades
                </h4>
                <p className='text-base font-normal text-muted-foreground'>
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

          <div id="como-usar" className='space-y-4'>
            <div className='space-y-2'>
              <h4 className={`mt-10 text-3xl font-extrabold tracking-[2.16px] text-foreground ${inter.className}`} >
                {pageComponent.sampleCode.title}
              </h4>
              <p className='text-base font-normal text-muted-foreground'>
                {pageComponent.sampleCode.description}
              </p>
            </div>


            <ClipBoardContainer>
              <ClipBoardHeader>
                <ClipBoardLabel>{pageComponent.sampleCode?.title}</ClipBoardLabel>
                <ClipBoardAction
                  copyText={pageComponent.sampleCode?.blockCode || ''}
                />
              </ClipBoardHeader>
              <ClipBoardArea >
                <CodeBlock
                  code={pageComponent.sampleCode?.blockCode || ''}
                />
              </ClipBoardArea>
            </ClipBoardContainer>
          </div>
        </div>

        {pageComponent.dependencies && (
          <div id="dependencias" className="space-y-4">
            <h4 className={`mt-10 text-3xl font-extrabold tracking-[2.16px] text-foreground ${inter.className}`} >
              Dependências
            </h4>
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
      </section>

      <section className='w-full col-span-1 h-screen border sticky top-0 px-8 py-5 space-y-6'>
        <h4 className='font-bold text-base'>Navegue nessa página</h4>

        <NavigateThroughSections links={pagesectionlinks} />
      </section>
    </div>
  )
}
