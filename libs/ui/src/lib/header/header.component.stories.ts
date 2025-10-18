import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  title: 'UI/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [HeaderComponent],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Header component with navigation, mobile menu, and user profile dropdown.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default header state with all features.',
      },
    },
  },
};

export const MobileMenuOpen: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Header with mobile menu open (view on mobile screen).',
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <app-header></app-header>
      <script>
        // يمكنك إضافة سكريبت لفتح القائمة في Storybook
        setTimeout(() => {
          const button = document.querySelector('button[aria-label="Open main menu"]');
          if (button) button.click();
        }, 100);
      </script>
    `,
  }),
};

export const ProfileDropdownOpen: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Header with user profile dropdown open.',
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <app-header></app-header>
      <script>
        setTimeout(() => {
          const profileButton = document.querySelector('button[aria-label="Open user menu"]');
          if (profileButton) profileButton.click();
        }, 100);
      </script>
    `,
  }),
};

export const WithActiveLink: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Header with active navigation link highlighted.',
      },
    },
  },
};

export const WithoutUserImage: Story = {
  args: {
    // إذا كان لديك @Input() في الكومبوننت
  },
  parameters: {
    docs: {
      description: {
        story: 'Header without user profile image.',
      },
    },
  },
};

export const WithCustomLogo: Story = {
  args: {
    // إذا كان لديك @Input() في الكومبوننت
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with custom company logo.',
      },
    },
  },
};
