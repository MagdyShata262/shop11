import type { Meta, StoryObj } from '@storybook/angular';
import { App } from './app';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const meta: Meta<App> = {
  title: 'App/App Component',
  component: App,
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([]), // توفير router فارغ للاختبار
        importProvidersFrom(CommonModule)
      ],
    }),
    moduleMetadata({
      imports: [CommonModule, RouterModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<App>;

export const Default: Story = {
  args: {
    title: 'Shop Application'
  },
};

export const WithArabicContent: Story = {
  args: {
    title: 'متجر التطبيقات'
  },
  parameters: {
    docs: {
      description: {
        story: 'نسخة مع النص العربي'
      }
    }
  }
};

export const LoadingState: Story = {
  args: {
    title: 'جاري التحميل...'
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};