import React from "react";
import type { FC } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card } from "./card";
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
            <Card.Header>
              <Card.Header.Title>Card</Card.Header.Title>
              <Card.Header.Icon>
                <FontAwesomeIcon icon={faStar} />
              </Card.Header.Icon>
            </Card.Header>
            <Card.Image>
              <Image
                square
                src={`https://source.unsplash.com/${unsplashID}/800x800`}
              />
            </Card.Image>
            <Card.Content>Lorem Ipsum</Card.Content>
            <Card.Footer>
              <Card.Footer.Item>
                <span>2 Likes</span>
              </Card.Footer.Item>
              <Card.Footer.Item>
                <span>4 Faves</span>
              </Card.Footer.Item>
            </Card.Footer>
          </Card>
        </Column>
      ))}
    </Columns>
  ),
};
