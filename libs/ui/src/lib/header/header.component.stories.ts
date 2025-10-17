import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { HeaderComponent, NavigationItem } from './header.component';

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
    variant: {
      control: { type: 'select' },
      options: ['default', 'transparent', 'sticky'],
    },
    showSearch: {
      control: { type: 'boolean' },
    },
    showCart: {
      control: { type: 'boolean' },
    },
    showUserMenu: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

const defaultNavigation: NavigationItem[] = [
  { label: 'الرئيسية', path: '/' },
  { label: 'المنتجات', path: '/products' },
  { label: 'العروض', path: '/offers' },
  { label: 'اتصل بنا', path: '/contact' },
];

export const Default: Story = {
  args: {
    logo: '🛍️',
    companyName: 'متجر',
    navigationItems: defaultNavigation,
    cartItemsCount: 3,
    showSearch: true,
    showCart: true,
    showUserMenu: true,
  },
};

export const WithUser: Story = {
  args: {
    logo: '🛍️',
    companyName: 'Shop',
    navigationItems: defaultNavigation,
    user: { name: 'أحمد محمد', avatar: '👤' },
    cartItemsCount: 5,
    variant: 'default',
  },
};

export const TransparentHeader: Story = {
  args: {
    logo: '🌟',
    companyName: 'Luxury',
    navigationItems: defaultNavigation,
    user: { name: 'سارة', avatar: '👩' },
    variant: 'transparent',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="bg-gradient-to-r from-purple-600 to-blue-600 min-h-screen p-8">
        <ui-header
          [logo]="logo"
          [companyName]="companyName"
          [navigationItems]="navigationItems"
          [user]="user"
          [variant]="variant">
        </ui-header>
        <div class="text-white text-center mt-20">
          <h1 class="text-4xl font-bold">خلفية لتوضيح الهيدر الشفاف</h1>
        </div>
      </div>
    `,
  }),
};

export const StickyHeader: Story = {
  args: {
    logo: '📌',
    companyName: 'Sticky Shop',
    navigationItems: defaultNavigation,
    cartItemsCount: 2,
    variant: 'sticky',
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="h-screen overflow-y-auto">
        <ui-header
          [logo]="logo"
          [companyName]="companyName"
          [navigationItems]="navigationItems"
          [cartItemsCount]="cartItemsCount"
          [variant]="variant">
        </ui-header>
        
        <div class="p-8 space-y-4">
          <div *ngFor="let item of [1,2,3,4,5,6,7,8,9,10]" 
               class="p-4 bg-gray-100 rounded-lg">
            <h3 class="font-semibold">عنصر {{ item }}</h3>
            <p class="text-gray-600">قم بالتمرير لأسفل لرؤية الهيدر الثابت</p>
          </div>
        </div>
      </div>
    `,
  }),
};

export const ArabicHeader: Story = {
  args: {
    logo: '🏪',
    companyName: 'متجر التطبيقات',
    navigationItems: [
      { label: 'الرئيسية', path: '/' },
      { label: 'المنتجات', path: '/products' },
      { label: 'التصنيفات', path: '/categories' },
      { label: 'العروض', path: '/offers' },
      { label: 'اتصل بنا', path: '/contact' },
    ],
    user: { name: 'محمد أحمد', avatar: '👨' },
    cartItemsCount: 7,
  },
  render: (args) => ({
    props: args,
    template: `
      <div dir="rtl">
        <ui-header
          [logo]="logo"
          [companyName]="companyName"
          [navigationItems]="navigationItems"
          [user]="user"
          [cartItemsCount]="cartItemsCount">
        </ui-header>
      </div>
    `,
  }),
};

export const MinimalHeader: Story = {
  args: {
    logo: '⚡',
    companyName: 'Minimal',
    navigationItems: defaultNavigation,
    showSearch: false,
    showCart: false,
    showUserMenu: false,
  },
};

export const WithActions: Story = {
  args: {
    logo: '🎯',
    companyName: 'Action Shop',
    navigationItems: defaultNavigation,
    cartItemsCount: 12,
    user: { name: 'ياسمين', avatar: '👩' },
  },
  render: (args) => ({
    props: {
      ...args,
      onNavigationClick: (path: string) => console.log('Navigation:', path),
      onSearchChange: (query: string) => console.log('Search:', query),
      onCartClick: () => console.log('Cart clicked'),
      onUserMenuClick: () => console.log('User menu clicked'),
      onLoginClick: () => console.log('Login clicked'),
    },
    template: `
      <ui-header
        [logo]="logo"
        [companyName]="companyName"
        [navigationItems]="navigationItems"
        [user]="user"
        [cartItemsCount]="cartItemsCount"
        (navigationClick)="onNavigationClick($event)"
        (searchChange)="onSearchChange($event)"
        (cartClick)="onCartClick()"
        (userMenuClick)="onUserMenuClick()"
        (loginClick)="onLoginClick()">
      </ui-header>
    `,
  }),
};
