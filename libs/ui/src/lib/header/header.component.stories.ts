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
  },
  tags: ['autodocs'],
  argTypes: {
    // يمكنك إضافة argTypes إذا كان لديك Inputs في الكومبوننت
  },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

// القصة الأساسية
export const Default: Story = {
  args: {
    // إذا كان لديك Inputs، ضعها هنا
  },
  parameters: {
    docs: {
      description: {
        component:
          'Header component with navigation, mobile menu, and user profile dropdown.',
      },
    },
  },
};

// قائمة الجوال مفتوحة
export const MobileMenuOpen: Story = {
  args: {
    // إذا كان لديك Input للتحكم في حالة القائمة
  },
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
};

// dropdown الملف الشخصي مفتوح
export const ProfileDropdownOpen: Story = {
  args: {
    // إذا كان لديك Input للتحكم في حالة dropdown
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with user profile dropdown open.',
      },
    },
  },
};

// حالة active للقائمة
export const WithActiveLink: Story = {
  args: {
    // إذا كان لديك Input للتحكم في الرابط النشط
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with active navigation link highlighted.',
      },
    },
  },
};

// بدون صورة المستخدم

// مع لوجو مختلف

// في header.component.stories.ts
export const WithoutUserImage: Story = {
  args: {
    userImage: '',
    showNotifications: false,
  },
};

export const WithCustomLogo: Story = {
  args: {
    logoUrl: 'https://via.placeholder.com/32x32?text=LOGO',
    companyName: 'Acme Inc',
  },
};
