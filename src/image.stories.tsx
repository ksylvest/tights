import type { Meta, StoryObj } from "@storybook/react";

import { Image } from "./image";

const meta = {
  title: "Image",
  component: Image,
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

const SAMPLE_URL = "https://source.unsplash.com/4rDCa5hBlCs/96x96";

export const BasicStory: Story = {
  render: (args) => <Image src={SAMPLE_URL} dimensions={48} {...args} />,
};
