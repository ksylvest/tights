import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Card } from "../components";
import { Column } from "../components";
import { Columns } from "../components";
import { Image } from "../components";

const stories = storiesOf("Components|Card", module);

const SAMPLES = [
  { unsplashID: "ACt8ycSzpdE" },
  { unsplashID: "dqXiw7nCb9Q" },
  { unsplashID: "fMUIVein7Ng" },
  { unsplashID: "PzYiCWOHtfU" },
  { unsplashID: "Ld5yiQggpS0" },
  { unsplashID: "pbrQvuKJQf8" },
  { unsplashID: "uVdOLNJpxA0" },
  { unsplashID: "VjmlDjePHjE" },
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
    {SAMPLES.map((sample, key) => (
      <Column key={key} mobile={6} tablet={4} desktop={3}>
        <Sample {...sample} />
      </Column>
    ))}
  </Columns>
));
