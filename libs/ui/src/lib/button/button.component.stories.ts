import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'UI/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline Button',
    variant: 'outline',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const Arabic: Story = {
  args: {
    label: 'زر بالعربية',
    variant: 'primary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'زر مع نص عربي'
      }
    }
  }
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div class="space-y-4 p-4">
        <div class="space-x-2">
          <ui-button label="Primary" variant="primary"></ui-button>
          <ui-button label="Secondary" variant="secondary"></ui-button>
          <ui-button label="Outline" variant="outline"></ui-button>
          <ui-button label="Ghost" variant="ghost"></ui-button>
        </div>
        <div class="space-x-2">
          <ui-button label="Small" size="sm" variant="primary"></ui-button>
          <ui-button label="Medium" size="md" variant="primary"></ui-button>
          <ui-button label="Large" size="lg" variant="primary"></ui-button>
        </div>
        <div class="space-x-2">
          <ui-button label="Disabled" variant="primary" [disabled]="true"></ui-button>
          <ui-button label="زر عربي" variant="secondary"></ui-button>
        </div>
      </div>
    `,
  }),
};