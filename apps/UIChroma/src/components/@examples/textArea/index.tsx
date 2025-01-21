import { Label, TextArea } from '@repo/ChromaUI/components'

const TextAreaPreview = () => {
  return (
    <div className="flex w-full flex-col space-y-4 p-4">
      <div className="space-y-3">
        <Label>
          Variante: <span className="font-bold">default</span>
        </Label>
        <TextArea variants="default" placeholder="Digite sua mensagem..." />
      </div>
      <div className="space-y-3">
        <Label>
          Variante: <span className="font-bold">success</span>
        </Label>
        <TextArea variants="success" placeholder="Digite sua mensagem..." />
      </div>
      <div className="space-y-3">
        <Label>
          Variante: <span className="font-bold">error</span>
        </Label>
        <TextArea variants="error" placeholder="Digite sua mensagem..." />
      </div>
    </div>
  )
}

export default TextAreaPreview
