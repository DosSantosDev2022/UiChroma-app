import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/packages'

const CardPreview = () => {
	return (
		<Card>
			<CardHeader>
				<span className='text-sm text-muted-foreground'>Members only</span>
				<CardTitle>Can coffee make you a better developer ?</CardTitle>
			</CardHeader>

			<CardContent>
				<CardDescription>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Voluptatibus quia, nulla! Maiores et perferendis eaque,
					exercitationem praesentium nihil.
				</CardDescription>
			</CardContent>
			<CardFooter className='gap-2'>
				<h6 className='text-sm text-muted-foreground'>Jonathan Reinink</h6>
				<span className='text-sm text-muted-foreground'>Aug 18</span>
			</CardFooter>
		</Card>
	)
}

export default CardPreview
