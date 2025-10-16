import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';
import { expect } from 'storybook/test';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'CardComponent',
};
export default meta;

type Story = StoryObj<CardComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/card/gi)).toBeTruthy();
  },
};
