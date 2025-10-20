import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { ProductsListComponent } from './products-list.component';
import { Product } from '@mydata-access/data-access';

// تعريف المكون الوهمي ككلاس Angular حقيقي
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-mock-product-detail',
  template: `<div class="p-4">
    تفاصيل المنتج الوهمي - معرّف المنتج: {{ productId }}
  </div>`,
  standalone: true,
})
class MockProductDetailComponent {
  productId = '';
}

// Mock data
const mockProducts: Product[] = [
  {
    id: 1,
    title: 'منتج تجريبي 1',
    price: 109.95,
    description: 'وصف المنتج التجريبي 1',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: 'منتج تجريبي 2',
    price: 22.3,
    description: 'وصف المنتج التجريبي 2',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    rating: { rate: 4.1, count: 5 },
  },
  {
    id: 3,
    title: 'منتج تجريبي 3',
    price: 55.99,
    description: 'وصف المنتج التجريبي 3',
    category: 'men clothing',
    image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    rating: { rate: 4.7, count: 500 },
  },
];

const initialState = {
  products: {
    products: mockProducts,
    selectedProduct: null,
    loading: false,
    error: null,
    loaded: true,
  },
};

const meta: Meta<ProductsListComponent> = {
  component: ProductsListComponent,
  title: 'Products/ProductsListComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideMockStore({ initialState }),
        provideRouter([
          { path: 'products/:id', component: MockProductDetailComponent },
        ]),
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<ProductsListComponent>;

export const Primary: Story = {
  args: {},
};

export const Loading: Story = {
  args: {},
  decorators: [
    applicationConfig({
      providers: [
        provideMockStore({
          initialState: {
            products: {
              products: [],
              selectedProduct: null,
              loading: true,
              error: null,
              loaded: false,
            },
          },
        }),
        provideRouter([
          { path: 'products/:id', component: MockProductDetailComponent },
        ]),
      ],
    }),
  ],
};

export const WithError: Story = {
  args: {},
  decorators: [
    applicationConfig({
      providers: [
        provideMockStore({
          initialState: {
            products: {
              products: [],
              selectedProduct: null,
              loading: false,
              error: 'فشل في تحميل المنتجات. يرجى المحاولة مرة أخرى.',
              loaded: false,
            },
          },
        }),
        provideRouter([
          { path: 'products/:id', component: MockProductDetailComponent },
        ]),
      ],
    }),
  ],
};

export const Empty: Story = {
  args: {},
  decorators: [
    applicationConfig({
      providers: [
        provideMockStore({
          initialState: {
            products: {
              products: [],
              selectedProduct: null,
              loading: false,
              error: null,
              loaded: true,
            },
          },
        }),
        provideRouter([
          { path: 'products/:id', component: MockProductDetailComponent },
        ]),
      ],
    }),
  ],
};
