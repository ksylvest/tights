import type { Meta, StoryObj } from "@storybook/react";

import { Content } from "./content";
import { Delete } from "./delete";
import { Image } from "./image";
import { Media } from "./media";
import { MediaContent } from "./media_content";
import { MediaLeft } from "./media_left";
import { MediaRight } from "./media_right";

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
      <MediaLeft>
        <Image square dimensions={48} src={SAMPLE_URL} />
      </MediaLeft>
      <MediaContent>
        <Content>
          <strong>Ringo</strong> <span>@ringo</span>
          <p>The quick brown fox jumped over the lazy dog.</p>
        </Content>
      </MediaContent>
      <MediaRight>
        <Delete />
      </MediaRight>
    </Media>
  ),
};
