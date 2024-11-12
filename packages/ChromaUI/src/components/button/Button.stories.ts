import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button' // Ajuste o caminho conforme necessário

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secundary',
        'outline',
        'highlight',
        'disabled',
        'link',
        'danger',
        'warning',
        'Shine',
        'Swipe',
      ],
    },
    sizes: {
      control: 'select',
      options: ['xs', 'sm', 'lg', 'icon', 'full'],
    },
    isLoading: { control: 'boolean' },
    asChild: { control: 'boolean' },
  },
} as Meta<ButtonProps>

// Utilizando `StoryObj` para definir a story de cada variação do Button
type Story = StoryObj<ButtonProps>

export const Default: Story = {
  args: {
    variant: "primary",
    sizes: 'full',
    isLoading: false,
    children: 'Default Button',
  },
}

export const Variants: Story = {
  args: {
    sizes: 'sm',
    children: 'Button Text',
  },
  argTypes: {
    variant: { control: 'radio' },
  },
}

export const Loading: Story = {
  args: {
    variant: 'primary',
    isLoading: true,
    children: 'Loading...',
  },
}

export const Sizes: Story = {
  args: {
    variant: 'primary',
    sizes: 'xs',
    children: 'Small Button',
  },
}

export const AsChild: Story = {
  args: {
    variant: 'outline',
    asChild: true,
    children: 'Button',
  },
}
