import type { Meta, StoryObj } from "@storybook/react-vite";

import { Column } from "./column";
import { Columns } from "./columns";
import { Image } from "./image";

const meta = {
  title: "Columns",
  component: Columns,
  tags: ["autodocs"],
} satisfies Meta<typeof Columns>;

export default meta;
type Story = StoryObj<typeof meta>;

const UNSPLASH_IDS = [
  "1720042710169-d56037e5489e",
  "1703915339790-6be05d65aa87",
  "1738760965517-21c9599c8d6d",
  "1684138293678-039c46b1d582",
  "1732813963186-f03b882873e6",
  "1730305949099-9f67a9461187",
  "1631793945537-b8a496b97edf",
  "1707003839733-5b2dcf332c91",
];

export const BasicStory: Story = {
  render: (args) => (
    <Columns multiline mobile tablet desktop {...args}>
      {UNSPLASH_IDS.map((unsplashID, key) => (
        <Column key={key} mobile={6} tablet={4} desktop={3}>
          <Image
            src={`https://images.unsplash.com/photo-${unsplashID}?auto=format&q=80&fit=crop&w=800&h=800`}
          />
        </Column>
      ))}
    </Columns>
  ),
};
