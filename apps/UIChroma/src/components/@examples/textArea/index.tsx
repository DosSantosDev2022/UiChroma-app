import { TextArea } from '@repo/ChromaUI/components'

const TextAreaPreview = () => {
  return (
    <div className="flex w-full flex-col space-y-4">
      <div className="space-y-1">
        <label>
          Variante: <span className="font-bold">default</span>
        </label>
        <TextArea variants="default" placeholder="Digite sua mensagem..." />
      </div>
      <div className="space-y-1">
        <label>
          Variante: <span className="font-bold">success</span>
        </label>
        <TextArea variants="success" placeholder="Digite sua mensagem..." />
      </div>
      <div className="space-y-1">
        <label>
          Variante: <span className="font-bold">error</span>
        </label>
        <TextArea variants="error" placeholder="Digite sua mensagem..." />
      </div>
    </div>
  )
}

export default TextAreaPreview
