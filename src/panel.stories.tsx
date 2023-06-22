import type { Meta, StoryObj } from "@storybook/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Panel } from "./panel";
import { PanelHeading } from "./panel_heading";
import { PanelTabs } from "./panel_tabs";
import { PanelBlock } from "./panel_block";
import { PanelIcon } from "./panel_icon";

const meta = {
  title: "Panel",
  component: Panel,
  tags: ["autodocs"],
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Panel {...args}>
      <PanelHeading>Lorem Ipsum</PanelHeading>
      <PanelTabs>
        <a>Like</a>
        <a>Save</a>
      </PanelTabs>
      <PanelBlock>
        <PanelIcon>
          <FontAwesomeIcon icon={faStar} />
        </PanelIcon>
        Lorem Ipsum
      </PanelBlock>
    </Panel>
  ),
};
