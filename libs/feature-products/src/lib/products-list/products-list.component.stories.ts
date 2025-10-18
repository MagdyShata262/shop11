import type { Meta, StoryObj } from '@storybook/angular';
import { ProductsListComponent } from './products-list.component';
import { expect } from 'storybook/test';

const meta: Meta<ProductsListComponent> = {
  component: ProductsListComponent,
  title: 'ProductsListComponent',
};
export default meta;

type Story = StoryObj<ProductsListComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/products-list/gi)).toBeTruthy();
  },
};
