import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'UI/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [InputComponent],
    }),
  ],
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'filled'],
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    readonly: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    label: 'اسم المستخدم',
    placeholder: 'أدخل اسم المستخدم',
    type: 'text',
    id: 'username-input',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'البريد الإلكتروني',
    placeholder: 'example@email.com',
    type: 'email',
    helperText: 'لن نشارك بريدك الإلكتروني مع أي شخص آخر.',
    id: 'email-input',
  },
};

export const Password: Story = {
  args: {
    label: 'كلمة المرور',
    placeholder: 'أدخل كلمة المرور',
    type: 'password',
    showPasswordToggle: true,
    helperText: 'يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل.',
    id: 'password-input',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'البريد الإلكتروني',
    placeholder: 'example@email.com',
    type: 'email',
    prefixIcon: '📧',
    suffixIcon: '✓',
    id: 'email-with-icons',
  },
};

export const StatusVariants: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <ui-input
          label="إدخال عادي"
          placeholder="هذا إدخال عادي"
          status="default"
          id="default-input">
        </ui-input>

        <ui-input
          label="إدخال ناجح"
          placeholder="هذا إدخال ناجح"
          status="success"
          helperText="هذا الحقل صحيح"
          id="success-input">
        </ui-input>

        <ui-input
          label="إدخال بتحذير"
          placeholder="هذا إدخال بتحذير"
          status="warning"
          helperText="هناك مشكلة طفيفة"
          id="warning-input">
        </ui-input>

        <ui-input
          label="إدخال به خطأ"
          placeholder="هذا إدخال به خطأ"
          status="error"
          helperText="هذا الحقل مطلوب"
          id="error-input">
        </ui-input>
      </div>
    `,
  }),
};

export const RequiredField: Story = {
  args: {
    label: 'البريد الإلكتروني',
    placeholder: 'example@email.com',
    type: 'email',
    required: true,
    id: 'required-email',
  },
};

export const FormExample: Story = {
  render: () => ({
    template: `
      <form class="space-y-4 max-w-md" (submit)="$event.preventDefault()">
        <h3 class="text-lg font-semibold mb-4">نموذج تسجيل</h3>
        
        <ui-input
          label="الاسم الكامل"
          placeholder="أدخل اسمك الكامل"
          type="text"
          required="true"
          id="full-name">
        </ui-input>

        <ui-input
          label="البريد الإلكتروني"
          placeholder="example@email.com"
          type="email"
          required="true"
          id="form-email">
        </ui-input>

        <ui-input
          label="كلمة المرور"
          placeholder="أدخل كلمة المرور"
          type="password"
          showPasswordToggle="true"
          required="true"
          helperText="يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل"
          id="form-password">
        </ui-input>

        <button 
          type="submit" 
          class="w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors">
          تسجيل
        </button>
      </form>
    `,
  }),
};

export const AccessibilityExample: Story = {
  render: () => ({
    template: `
      <div class="space-y-4 max-w-md">
        <h3 class="text-lg font-semibold">أمثلة إمكانية الوصول</h3>
        
        <ui-input
          label="البريد الإلكتروني"
          placeholder="example@email.com"
          type="email"
          required="true"
          helperText="مطلوب لتسجيل الدخول"
          id="accessible-email">
        </ui-input>

        <ui-input
          label="كلمة المرور"
          placeholder="أدخل كلمة المرور"
          type="password"
          showPasswordToggle="true"
          helperText="استخدم زر العين لإظهار/إخفاء كلمة المرور"
          id="accessible-password">
        </ui-input>
      </div>
    `,
  }),
};