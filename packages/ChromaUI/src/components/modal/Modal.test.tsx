import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { it, expect, describe, beforeEach } from 'vitest'
import {
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalRoot,
  ModalTitle,
  ModalTrigger
} from './Modal'
import userEvent from '@testing-library/user-event'

describe('Component Modal', () => {
  beforeEach(() => {
    render(
      <ModalRoot>
        <ModalTrigger size="xl">Open Modal</ModalTrigger>
        <ModalOverlay variant="blur" />
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Title modal</ModalTitle>
            <ModalClose>Close modal</ModalClose>
          </ModalHeader>
          <ModalDescription>Description modal</ModalDescription>
        </ModalContent>
        <ModalFooter>Footer modal</ModalFooter>
      </ModalRoot>
    )
  })

  it('should render the component correctly', () => {
    expect(screen.getByLabelText('modal-root')).toBeInTheDocument()
  })

  it('should open the modal when clicking on the trigger', async () => {
    const user = userEvent.setup()

    // O modal não deve estar visível inicialmente
    expect(screen.queryByText('Title modal')).not.toBeInTheDocument()

    // Clicar no botão para abrir o modal
    await user.click(screen.getByText('Open Modal'))

    // Agora, o modal deve estar visível
    expect(screen.getByText('Title modal')).toBeInTheDocument()
    expect(screen.getByText('Description modal')).toBeInTheDocument()

    // Clicar no botão de fechar
    await user.click(screen.getByLabelText('modal-close'))

    // O modal não deve mais estar visível
    expect(screen.queryByText('Title modal')).not.toBeInTheDocument()
    expect(screen.queryByText('Description modal')).not.toBeInTheDocument()
  })
})
