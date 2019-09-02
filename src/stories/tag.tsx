import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Tag } from "../components";
import { Tags } from "../components";

const stories = storiesOf("Elements|Tag", module);

stories.add("Basic", () => <Tag>Tag</Tag>);

stories.add("Colors", () => (
  <>
    <Tags>
      <Tag color="white">White</Tag>
      <Tag color="light">Light</Tag>
      <Tag color="dark">Dark</Tag>
      <Tag color="black">Black</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="link">Link</Tag>
      <Tag color="info">Info</Tag>
      <Tag color="success">Success</Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="danger">Danger</Tag>
    </Tags>
  </>
));

stories.add("Sizes", () => (
  <>
    <Tags>
      <Tag size="normal">Normal</Tag>
      <Tag size="medium">Medium</Tag>
      <Tag size="large">Large</Tag>
    </Tags>
  </>
));
