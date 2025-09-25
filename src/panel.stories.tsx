import type { Meta, StoryObj } from "@storybook/react-vite";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Panel } from "./panel";
import { PanelBlock } from "./panel_block";
import { PanelHeading } from "./panel_heading";
import { PanelIcon } from "./panel_icon";
import { PanelTabs } from "./panel_tabs";

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
