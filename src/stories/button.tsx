import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Button } from "../components";
import { Buttons } from "../components";

const stories = storiesOf("Elements|Button", module);

stories.add("Basic", () => <Button>Button</Button>);

stories.add("Colors", () => (
  <>
    <Buttons>
      <Button color="white">White</Button>
      <Button color="light">Light</Button>
      <Button color="dark">Dark</Button>
      <Button color="black">Black</Button>
      <Button color="text">Text</Button>
      <Button color="primary">Primary</Button>
      <Button color="link">Link</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </Buttons>
  </>
));

stories.add("Sizes", () => (
  <>
    <Buttons>
      <Button size="small">Small</Button>
      <Button size="normal">Normal</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Buttons>
  </>
));
