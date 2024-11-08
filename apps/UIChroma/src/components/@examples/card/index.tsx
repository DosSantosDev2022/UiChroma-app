import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ChromaUI/components/card.tsx'

export default function CardPreview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Titulo do componente</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Aqui você devera colocar descrições , ou paragrafos para seus cards
        </CardDescription>
      </CardContent>
      <CardFooter>
        Aqui você podera colocar por exemplo botões de ação
      </CardFooter>
    </Card>
  )
}
