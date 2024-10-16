import { NavigateThroughSections } from "@/components/navigationScroll/NavigateThroughSections";

const pagesectionlinks = [
  {
    text: 'Introdução',
    url: 'Introdução',
  },
  {
    text: 'Primeiros Passos',
    url: 'Primeiros-Passos',
  },
  {
    text: 'Instalação',
    url: 'Instalação',
  },
  {
    text: 'Usando os Componentes',
    url: 'Usando',
  },
  {
    text: 'Personalização',
    url: 'Personalização',
  },
  {
    text: 'Exemplos',
    url: 'Exemplos',
  },
] 

export default function DocumentationPage() {
  return <div className='grid grid-cols-4 gap-4'>
    <section className="px-8 py-5 col-span-3  w-full border rounded-md shadow-sm "></section>
    <section className='w-full col-span-1 h-screen border sticky top-0 px-8 py-5 space-y-6'>
    <h4 className='font-bold text-base'>Navegue nessa página</h4>
    <NavigateThroughSections links={pagesectionlinks} />
    </section>
  </div>
}
