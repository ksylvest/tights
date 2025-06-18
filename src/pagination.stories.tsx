import type { Meta, StoryObj } from "@storybook/react-vite";

import { Pagination } from "./pagination";
import { PaginationEllipsis } from "./pagination_ellipsis";
import { PaginationItem } from "./pagination_item";
import { PaginationLink } from "./pagination_link";
import { PaginationList } from "./pagination_list";
import { PaginationNext } from "./pagination_next";
import { PaginationPrev } from "./pagination_prev";

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
      <PaginationPrev>Prev</PaginationPrev>
      <PaginationNext>Next</PaginationNext>
      <PaginationList>
        <PaginationItem>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink current>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>3</PaginationLink>
        </PaginationItem>
        <PaginationEllipsis />
        <PaginationItem>
          <PaginationLink>7</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>8</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>9</PaginationLink>
        </PaginationItem>
      </PaginationList>
    </Pagination>
  ),
};
