import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Progress } from "../components";

const stories = storiesOf("Elements|Progress", module);

stories.add("Basic", () => <Progress value="50" />);

stories.add("Colors", () => (
  <>
    <Progress value="50" color="primary" />
    <Progress value="50" color="link" />
    <Progress value="50" color="info" />
    <Progress value="50" color="success" />
    <Progress value="50" color="warning" />
    <Progress value="50" color="danger" />
  </>
));

stories.add("Sizes", () => (
  <>
    <Progress value="50" size="small" />
    <Progress value="50" size="medium" />
    <Progress value="50" size="large" />
  </>
));

stories.add("Indeterminate", () => (
  <>
    <Progress />
  </>
));
