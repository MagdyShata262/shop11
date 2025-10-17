import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FooterComponent } from './footer.component';

const meta: Meta<FooterComponent> = {
  title: 'UI/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [FooterComponent],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'detailed'],
    },
    showSocialLinks: {
      control: { type: 'boolean' },
    },
    showNewsletter: {
      control: { type: 'boolean' },
    },
    companyName: {
      control: { type: 'text' },
    },
    currentYear: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<FooterComponent>;

export const Default: Story = {
  args: {
    companyName: 'Shop',
    variant: 'default',
    showSocialLinks: true,
    showNewsletter: false,
  },
};

export const Minimal: Story = {
  args: {
    companyName: 'Shop',
    variant: 'minimal',
    showSocialLinks: true,
    showNewsletter: false,
  },
};

export const Detailed: Story = {
  args: {
    companyName: 'Shop',
    variant: 'detailed',
    showSocialLinks: true,
    showNewsletter: true,
  },
};

export const ArabicFooter: Story = {
  args: {
    companyName: 'متجر',
    variant: 'detailed',
    showSocialLinks: true,
    showNewsletter: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div dir="rtl">
        <ui-footer
          [companyName]="companyName"
          [variant]="variant"
          [showSocialLinks]="showSocialLinks"
          [showNewsletter]="showNewsletter">
        </ui-footer>
      </div>
    `,
  }),
};

export const WithNewsletter: Story = {
  args: {
    companyName: 'Shop',
    variant: 'default',
    showSocialLinks: true,
    showNewsletter: true,
  },
};

export const NoSocialLinks: Story = {
  args: {
    companyName: 'Shop',
    variant: 'default',
    showSocialLinks: false,
    showNewsletter: false,
  },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="mb-4 text-lg font-semibold">Minimal Footer</h3>
          <ui-footer companyName="Shop" variant="minimal"></ui-footer>
        </div>
        
        <div>
          <h3 class="mb-4 text-lg font-semibold">Default Footer</h3>
          <ui-footer companyName="Shop" variant="default" [showNewsletter]="true"></ui-footer>
        </div>
        
        <div>
          <h3 class="mb-4 text-lg font-semibold">Detailed Footer</h3>
          <ui-footer companyName="Shop" variant="detailed" [showNewsletter]="true"></ui-footer>
        </div>
        
        <div>
          <h3 class="mb-4 text-lg font-semibold">Arabic Footer</h3>
          <div dir="rtl">
            <ui-footer companyName="متجر" variant="detailed" [showNewsletter]="true"></ui-footer>
          </div>
        </div>
      </div>
    `,
  }),
};