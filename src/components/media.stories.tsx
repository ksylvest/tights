import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Content } from "./content";
import { Delete } from "./delete";
import { Image } from "./image";
import { Media } from "./media";

const meta = {
  title: "Media",
  component: Media,
  tags: ["autodocs"],
} satisfies Meta<typeof Media>;

export default meta;
type Story = StoryObj<typeof meta>;

const SAMPLE_URL = "https://source.unsplash.com/BDIcmo7netA/96x96";

export const BasicStory: Story = {
  render: (args) => (
    <Media {...args}>
      <Media.Left>
        <Image square dimensions={48} src={SAMPLE_URL} />
      </Media.Left>
      <Media.Content>
        <Content>
          <strong>Ringo</strong> <span>@ringo</span>
          <p>The quick brown fox jumped over the lazy dog.</p>
        </Content>
      </Media.Content>
      <Media.Right>
        <Delete />
      </Media.Right>
    </Media>
  ),
};
