import {
	ModalClose,
	ModalContent,
	ModalDescription,
	ModalHeader,
	ModalOverlay,
	ModalRoot,
	ModalTitle,
	ModalTrigger,
} from '@repo/ui/components'

const ModalPreview = () => {
	return (
		<div className='flex w-full items-center justify-center'>
			<ModalRoot>
				<ModalTrigger size='xl'>Abrir modal</ModalTrigger>
				<ModalOverlay variant='blur' />
				<ModalContent>
					<ModalHeader>
						<ModalTitle>Templates Chroma UI</ModalTitle>
						<ModalClose>X</ModalClose>
					</ModalHeader>
					<ModalDescription>
						Com a nossa biblioteca de componentes, você pode gerar um tema
						totalmente personalizado para sua aplicação, usando variáveis
						css, garantindo flexibilidade e fácil manutenção.
					</ModalDescription>
				</ModalContent>
			</ModalRoot>
		</div>
	)
}

export default ModalPreview
