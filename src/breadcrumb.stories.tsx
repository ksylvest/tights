import type { Meta, StoryObj } from "@storybook/react-vite";

import { Breadcrumb } from "./breadcrumb";
import { BreadcrumbItem } from "./breadcrumb_item";
import { BreadcrumbList } from "./breadcrumb_list";

const meta = {
  title: "Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <a href="#">Documentation</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <a href="#">Components</a>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};
