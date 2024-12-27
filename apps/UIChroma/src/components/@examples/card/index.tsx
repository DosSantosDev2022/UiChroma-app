import { Title } from '@/components/global/title/title'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@repo/ChromaUI/components'

const CardPreview = () => {
  return (
    <Card>
      <CardHeader>
        <span className="text-sm text-muted-foreground">Members only</span>
        <CardTitle>Can coffee make you a better developer?</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div>
          <Title as="h6" className="text-sm text-muted-foreground">
            Jonathan Reinink
          </Title>
          <span className="text-sm text-muted-foreground">Aug 18</span>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CardPreview
