import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CardComponent } from './card.component';
import { ButtonComponent } from '../button/button.component';

const meta: Meta<CardComponent> = {
  title: 'UI/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'elevated', 'flat'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    hoverEffect: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'This is a subtitle',
    variant: 'default',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-card [title]="title" [subtitle]="subtitle" [variant]="variant">
        <p>This is the card content. You can put any content here.</p>
      </ui-card>
    `,
  }),
};

export const WithContent: Story = {
  args: {
    title: 'Product Card',
    subtitle: 'Amazing product description',
    variant: 'elevated',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-card [title]="title" [subtitle]="subtitle" [variant]="variant">
        <div class="space-y-3">
          <img src="https://via.placeholder.com/300x200" alt="Product" class="w-full rounded-lg">
          <p class="text-gray-600">This is a detailed description of the product.</p>
          <div class="flex justify-between items-center">
            <span class="text-lg font-bold text-primary-600">$99.99</span>
            <ui-button label="Add to Cart" variant="primary" size="sm"></ui-button>
          </div>
        </div>
      </ui-card>
    `,
  }),
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    variant: 'outline',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-card [title]="title" [variant]="variant">
        <p>This card has a footer section.</p>
        
        <div footer class="flex justify-end space-x-2">
          <ui-button label="Cancel" variant="outline" size="sm"></ui-button>
          <ui-button label="Save" variant="primary" size="sm"></ui-button>
        </div>
      </ui-card>
    `,
  }),
};

export const ArabicCard: Story = {
  args: {
    title: 'بطاقة بالعربية',
    subtitle: 'هذا وصف فرعي',
    variant: 'elevated',
  },
  render: (args) => ({
    props: args,
    template: `
      <div dir="rtl">
        <ui-card [title]="title" [subtitle]="subtitle" [variant]="variant">
          <p>هذا محتوى البطاقة باللغة العربية. يمكنك وضع أي محتوى هنا.</p>
          
          <div footer class="flex justify-start space-x-2 rtl:space-x-reverse">
            <ui-button label="إلغاء" variant="outline" size="sm"></ui-button>
            <ui-button label="حفظ" variant="primary" size="sm"></ui-button>
          </div>
        </ui-card>
      </div>
    `,
  }),
};

export const HoverEffect: Story = {
  args: {
    title: 'Hover Card',
    subtitle: 'Hover over me!',
    variant: 'default',
    hoverEffect: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-card [title]="title" [subtitle]="subtitle" [variant]="variant" [hoverEffect]="hoverEffect">
        <p>This card has hover effect. Try hovering over it!</p>
      </ui-card>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ui-card title="Default Card" variant="default">
          <p>Default variant with border</p>
        </ui-card>
        
        <ui-card title="Outline Card" variant="outline">
          <p>Outline variant with thicker border</p>
        </ui-card>
        
        <ui-card title="Elevated Card" variant="elevated">
          <p>Elevated variant with shadow</p>
        </ui-card>
        
        <ui-card title="Flat Card" variant="flat">
          <p>Flat variant with background color</p>
        </ui-card>
      </div>
    `,
  }),
};
