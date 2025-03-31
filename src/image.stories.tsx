import type { Meta, StoryObj } from "@storybook/react";

import { Image } from "./image";

const meta = {
  title: "Image",
  component: Image,
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

const SAMPLE_URL =
  "https://images.unsplash.com/photo-1720042710169-d56037e5489e?auto=format&q=80&fit=crop&w=96&h=96";

export const BasicStory: Story = {
  render: (args) => <Image src={SAMPLE_URL} dimensions={48} {...args} />,
};
