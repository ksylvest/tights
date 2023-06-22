import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./tabs";
import { TabsItem } from "./tabs_item";
import { TabsList } from "./tabs_list";

const meta = {
  title: "Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsItem>
          <a>Photos</a>
        </TabsItem>
        <TabsItem>
          <a>Videos</a>
        </TabsItem>
      </TabsList>
    </Tabs>
  ),
};
