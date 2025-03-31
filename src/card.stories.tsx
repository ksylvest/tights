import type { Meta, StoryObj } from "@storybook/react";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card } from "./card";
import { CardContent } from "./card_content";
import { CardFooter } from "./card_footer";
import { CardFooterItem } from "./card_footer_item";
import { CardHeader } from "./card_header";
import { CardHeaderIcon } from "./card_header_icon";
import { CardHeaderTitle } from "./card_header_title";
import { CardImage } from "./card_image";
import { Column } from "./column";
import { Columns } from "./columns";
import { Image } from "./image";

const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

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
    <Columns multiline mobile tablet desktop>
      {UNSPLASH_IDS.map((unsplashID, key) => (
        <Column key={key} mobile={6} tablet={4} desktop={3}>
          <Card {...args}>
            <CardHeader>
              <CardHeaderTitle>Card</CardHeaderTitle>
              <CardHeaderIcon>
                <FontAwesomeIcon icon={faStar} />
              </CardHeaderIcon>
            </CardHeader>
            <CardImage>
              <Image
                square
                src={`https://images.unsplash.com/photo-${unsplashID}?auto=format&q=80&fit=crop&w=800&h=800`}
              />
            </CardImage>
            <CardContent>Lorem Ipsum</CardContent>
            <CardFooter>
              <CardFooterItem>
                <span>2 Likes</span>
              </CardFooterItem>
              <CardFooterItem>
                <span>4 Faves</span>
              </CardFooterItem>
            </CardFooter>
          </Card>
        </Column>
      ))}
    </Columns>
  ),
};
