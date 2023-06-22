import type { FC } from "react";
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
  "ACt8ycSzpdE",
  "dqXiw7nCb9Q",
  "fMUIVein7Ng",
  "PzYiCWOHtfU",
  "Ld5yiQggpS0",
  "pbrQvuKJQf8",
  "uVdOLNJpxA0",
  "VjmlDjePHjE",
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
                src={`https://source.unsplash.com/${unsplashID}/800x800`}
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
