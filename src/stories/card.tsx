import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Card } from "../components";
import { Column } from "../components";
import { Columns } from "../components";
import { Image } from "../components";

const stories = storiesOf("Components|Card", module);

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

const Sample: React.FC<{
  unsplashID: string;
}> = ({ unsplashID }) => (
  <Card>
    <Card.Header>
      <Card.Header.Title>Card</Card.Header.Title>
      <Card.Header.Icon>
        <FontAwesomeIcon icon={faStar} />
      </Card.Header.Icon>
    </Card.Header>
    <Card.Image>
      <Image square src={`https://source.unsplash.com/${unsplashID}/800x800`} />
    </Card.Image>
    <Card.Content>Lorem Ipsum</Card.Content>
    <Card.Footer>
      <Card.Footer.Item tag="a">Details</Card.Footer.Item>
      <Card.Footer.Item tag="p">
        <span>2 Likes</span>
      </Card.Footer.Item>
      <Card.Footer.Item tag="p">
        <span>4 Faves</span>
      </Card.Footer.Item>
    </Card.Footer>
  </Card>
);

stories.add("Basic", () => (
  <Columns multiline mobile tablet desktop>
    {UNSPLASH_IDS.map((unsplashID, key) => (
      <Column key={key} mobile={6} tablet={4} desktop={3}>
        <Sample unsplashID={unsplashID} />
      </Column>
    ))}
  </Columns>
));
