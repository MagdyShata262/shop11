import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { expect } from 'storybook/test';

const meta: Meta<HeaderComponent> = {
  component: HeaderComponent,
  title: 'HeaderComponent',
};
export default meta;

type Story = StoryObj<HeaderComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/header/gi)).toBeTruthy();
  },
};
