import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Columns } from "..";
import { Column } from "..";
import { Image } from "..";

const meta = {
  title: "Columns",
  component: Columns,
  tags: ["autodocs"],
} satisfies Meta<typeof Columns>;

export default meta;
type Story = StoryObj<typeof meta>;

const UNSPLASH_IDS = [
  "uvUxEPCWOwI",
  "xEY0dtFfon0",
  "uYcEkcREK7E",
  "kn7FVkDwLfU",
  "2TK6cWlqiyU",
  "6qIXonfBg1E",
  "brKCHU0Xo5s",
  "Qc7DDVxr734",
];

export const BasicStory: Story = {
  render: (args) => (
    <Columns multiline mobile tablet desktop {...args}>
      {UNSPLASH_IDS.map((unsplashID, key) => (
        <Column key={key} mobile={6} tablet={4} desktop={3}>
          <Image src={`https://source.unsplash.com/${unsplashID}/800x800`} />
        </Column>
      ))}
    </Columns>
  ),
};
