import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "..";

const meta = {
  title: "Pagination",
  component: Pagination,
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Prev>Prev</Pagination.Prev>
      <Pagination.Next>Next</Pagination.Next>
      <Pagination.List>
        <Pagination.Item>
          <Pagination.Link>1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link current>2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>3</Pagination.Link>
        </Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>
          <Pagination.Link>7</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>8</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>9</Pagination.Link>
        </Pagination.Item>
      </Pagination.List>
    </Pagination>
  ),
};
