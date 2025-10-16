import type { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';
import { expect } from 'storybook/test';

const meta: Meta<FooterComponent> = {
  component: FooterComponent,
  title: 'FooterComponent',
};
export default meta;

type Story = StoryObj<FooterComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/footer/gi)).toBeTruthy();
  },
};
