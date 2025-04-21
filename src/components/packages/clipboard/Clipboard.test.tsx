import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import {
	ClipBoardAction,
	ClipBoardArea,
	ClipBoardContainer,
	ClipBoardHeader,
	ClipBoardLabel,
} from './Clipboard'

describe('Component clipboard', () => {
	beforeEach(() => {
		render(
			<ClipBoardContainer>
				<ClipBoardHeader>
					<ClipBoardLabel>Copiar componente</ClipBoardLabel>
					<ClipBoardAction copyText={''} />
				</ClipBoardHeader>
				<ClipBoardArea>{''}</ClipBoardArea>
			</ClipBoardContainer>,
		)
	})

	it('should render the clipboard component correctly', () => {
		expect(
			screen.getByLabelText('clipboard-container'),
		).toBeInTheDocument()
	})

	/* it('should must copy the content by clicking the action button', async () => {
    const user = userEvent.setup()
    const textToCopy = 'Texto para ser copiado'

    const writeTextMock = vi
      .spyOn(navigator.clipboard, 'writeText')
      .mockResolvedValue(undefined)

    render(
      <ClipBoardContainer>
        <ClipBoardHeader>
          <ClipBoardLabel>Copiar componente</ClipBoardLabel>
          <ClipBoardAction copyText={textToCopy} />
        </ClipBoardHeader>
        <ClipBoardArea>{textToCopy}</ClipBoardArea>
      </ClipBoardContainer>
    )

    const button = screen.getByRole('button', { name: 'button-copy' })
    await user.click(button)

    expect(writeTextMock).toHaveBeenCalledTimes(1)
    expect(writeTextMock).toHaveBeenCalledWith(textToCopy)

    writeTextMock.mockRestore()
  }) */
})
