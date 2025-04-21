'use client'
import type { Colors } from '@/@types/colors-themes-types'
import { CodeBlock } from '@/components/global/codeBlock/codeBlock'
import { useThemeStore } from '@/store/use-Theme-Store'
import { formatColors } from '@/utils/format-Colors'
import { generateCodeCss } from '@/utils/generate-Code'
import {
	Button,
	ClipBoardAction,
	ClipBoardArea,
	ClipBoardContainer,
	ClipBoardHeader,
	ClipBoardLabel,
	ModalClose,
	ModalContent,
	ModalDescription,
	ModalHeader,
	ModalOverlay,
	ModalRoot,
	ModalTitle,
	ModalTrigger,
} from '@/components/packages'
import { IoCopy } from 'react-icons/io5'

export function ModalCodeCss() {
	const { darkColors, lightColors } = useThemeStore()

	return (
		<ModalRoot>
			<ModalTrigger className='w-full rounded-lg'>
				Copiar
				<IoCopy size={16} />
			</ModalTrigger>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					<div className='flex flex-col items-start justify-center gap-1'>
						<ModalTitle>Theme - UIChroma</ModalTitle>
						<ModalDescription>
							Copie e cole o nosso código fonte em seus arquivos global.css
						</ModalDescription>
					</div>
					<ModalClose />
				</ModalHeader>
				<div className='flex flex-col gap-2'>
					<div className='custom-scrollbar sticky max-h-[468px] overflow-y-auto'>
						<ClipBoardContainer>
							<ClipBoardHeader>
								<ClipBoardLabel>Copiar</ClipBoardLabel>
								<ClipBoardAction
									copyText={generateCodeCss(
										formatColors(lightColors) as Colors,
										formatColors(darkColors) as Colors,
									)}
								/>
							</ClipBoardHeader>
							<ClipBoardArea>
								<CodeBlock
									code={generateCodeCss(
										formatColors(lightColors) as Colors,
										formatColors(darkColors) as Colors,
									)}
								/>
							</ClipBoardArea>
						</ClipBoardContainer>
					</div>
				</div>
			</ModalContent>
		</ModalRoot>
	)
}
