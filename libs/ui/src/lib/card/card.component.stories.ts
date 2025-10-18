import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CardComponent, Product } from './card.component';
import { expect, userEvent, within } from 'storybook/internal/test';

// نموذج بيانات المنتج للقصص
const sampleProduct: Product = {
  id: '1',
  name: 'Apple AirPods',
  price: 95.0,
  description:
    'With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.',
  imageUrl:
    'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&auto=format&fit=crop&w=927&q=80',
  category: 'Electronics',
  rating: 4.5,
  discount: 10,
  inStock: true,
};

const outOfStockProduct: Product = {
  ...sampleProduct,
  id: '2',
  name: 'Apple AirPods Pro',
  inStock: false,
};

const noDiscountProduct: Product = {
  ...sampleProduct,
  id: '3',
  name: 'Apple AirPods Max',
  price: 549.0,
  discount: 0,
  rating: 4.8,
};

const meta: Meta<CardComponent> = {
  title: 'UI/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [CardComponent],
    }),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible product card component for e-commerce applications with support for discounts, ratings, and multiple actions.',
      },
    },
  },
  argTypes: {
    product: {
      control: 'object',
      description: 'Product data to display',
    },
    buttonText: {
      control: 'text',
      description: 'Text for the primary action button',
    },
    showActions: {
      control: 'boolean',
      description: 'Whether to show secondary actions (Quick View, Wishlist)',
    },
    customClass: {
      control: 'text',
      description: 'Additional CSS classes for custom styling',
    },
    addToCart: {
      action: 'onAddToCart',
      description: 'Emitted when add to cart button is clicked',
    },
    quickView: {
      action: 'onQuickView',
      description: 'Emitted when quick view button is clicked',
    },
    addToWishlist: {
      action: 'onAddToWishlist',
      description: 'Emitted when wishlist button is clicked',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardComponent>;

// القصة الأساسية
export const Default: Story = {
  args: {
    product: sampleProduct,
    buttonText: 'Add to Cart',
    showActions: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default product card with all features enabled including discount badge and rating.',
      },
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const addToCartButton = canvas.getByRole('button', {
      name: /add to cart/i,
    });

    await userEvent.click(addToCartButton);
    await expect(args.addToCart).toHaveBeenCalledWith(sampleProduct);
  },
};

// بطاقة بدون خصم
export const WithoutDiscount: Story = {
  args: {
    product: noDiscountProduct,
    buttonText: 'Add to Cart',
    showActions: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Product card without discount showing regular pricing.',
      },
    },
  },
};

// منتج غير متوفر
export const OutOfStock: Story = {
  args: {
    product: outOfStockProduct,
    buttonText: 'Add to Cart',
    showActions: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Product card for out-of-stock items with disabled add to cart button.',
      },
    },
  },
};

// بدون التقييم
export const WithoutRating: Story = {
  args: {
    product: {
      ...sampleProduct,
      rating: undefined,
    },
    buttonText: 'Buy Now',
    showActions: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Product card without rating display.',
      },
    },
  },
};

// بدون الأزرار الإضافية
export const WithoutAdditionalActions: Story = {
  args: {
    product: sampleProduct,
    buttonText: 'Add to Cart',
    showActions: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Product card with only the primary add to cart action.',
      },
    },
  },
};

// مع زر مخصص
export const WithCustomButton: Story = {
  args: {
    product: sampleProduct,
    buttonText: '🛒 Buy Now',
    showActions: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Product card with custom button text and emoji.',
      },
    },
  },
};

// مع فئات مخصصة
export const WithCustomStyling: Story = {
  args: {
    product: sampleProduct,
    buttonText: 'Add to Cart',
    showActions: true,
    customClass: 'border-2 border-blue-300 shadow-xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Product card with additional custom CSS classes for unique styling.',
      },
    },
  },
};

// مع محتوى مخصص
export const WithCustomContent: Story = {
  args: {
    product: sampleProduct,
    buttonText: 'Add to Cart',
    showActions: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-card 
        [product]="product"
        [buttonText]="buttonText"
        [showActions]="showActions"
        (addToCart)="addToCart($event)"
        (quickView)="quickView($event)"
        (addToWishlist)="addToWishlist($event)">
        <ng-template #customContent>
          <div class="flex items-center justify-between mt-2 p-2 bg-blue-50 rounded">
            <span class="text-sm text-blue-600 font-semibold">🚚 Free Shipping</span>
            <span class="text-sm text-green-600 font-semibold">✓ In Stock</span>
          </div>
          <div class="mt-2 flex gap-1">
            <span class="text-xs bg-gray-100 px-2 py-1 rounded">Wireless</span>
            <span class="text-xs bg-gray-100 px-2 py-1 rounded">Bluetooth</span>
            <span class="text-xs bg-gray-100 px-2 py-1 rounded">24h Battery</span>
          </div>
        </ng-template>
      </ui-card>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Product card with custom additional content including shipping info and tags.',
      },
    },
  },
};

// تفاعل المستخدم
export const UserInteractions: Story = {
  args: {
    product: sampleProduct,
    buttonText: 'Add to Cart',
    showActions: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates all user interactions available on the product card.',
      },
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // اختبار إضافة إلى السلة
    const addToCartButton = canvas.getByRole('button', {
      name: /add to cart/i,
    });
    await userEvent.click(addToCartButton);
    await expect(args.addToCart).toHaveBeenCalledWith(sampleProduct);

    // اختبار العرض السريع
    const quickViewButton = canvas.getByRole('button', { name: /quick view/i });
    await userEvent.click(quickViewButton);
    await expect(args.quickView).toHaveBeenCalledWith(sampleProduct);

    // اختبار إضافة إلى المفضلة
    const wishlistButton = canvas.getByRole('button', { name: /♡/i });
    await userEvent.click(wishlistButton);
    await expect(args.addToWishlist).toHaveBeenCalledWith(sampleProduct);
  },
};

// عرض شبكي متعدد البطاقات
export const GridLayout: Story = {
  args: {
    product: sampleProduct,
    buttonText: 'Add to Cart',
    showActions: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-7xl mx-auto">
        <ui-card 
          [product]="product"
          [buttonText]="buttonText"
          [showActions]="showActions" 
          (addToCart)="addToCart($event)"
          (quickView)="quickView($event)"
          (addToWishlist)="addToWishlist($event)">
        </ui-card>
        
        <ui-card 
          [product]="{
            ...product,
            id: '4',
            name: 'Sony WH-1000XM4',
            price: 349.00,
            rating: 4.7,
            discount: 15
          }" 
          [buttonText]="buttonText"
          [showActions]="showActions"
          (addToCart)="addToCart($event)"
          (quickView)="quickView($event)"
          (addToWishlist)="addToWishlist($event)">
        </ui-card>
        
        <ui-card 
          [product]="{
            ...product,
            id: '5',
            name: 'Bose QuietComfort 45',
            price: 329.00,
            rating: 4.6,
            discount: 0
          }" 
          [buttonText]="buttonText"
          [showActions]="showActions"
          (addToCart)="addToCart($event)"
          (quickView)="quickView($event)"
          (addToWishlist)="addToWishlist($event)">
        </ui-card>
      </div>
    `,
  }),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Multiple product cards displayed in a responsive grid layout.',
      },
    },
  },
};
