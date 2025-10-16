import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { expect } from 'storybook/internal/test';


const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A versatile button component styled with Tailwind CSS.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Text displayed inside the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Click me' },
      },
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Visual style of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

// Default story
export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const button = canvas.querySelector('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveTextContent('Button');
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
    label: 'Secondary',
  },
};

export const Outline: Story = {
  args: {
    ...Primary.args,
    variant: 'outline',
    label: 'Outline',
  },
};

export const Ghost: Story = {
  args: {
    ...Primary.args,
    variant: 'ghost',
    label: 'Ghost',
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'sm',
    label: 'Small',
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'lg',
    label: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
    label: 'Disabled',
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    await expect(button).toBeDisabled();
  },
};