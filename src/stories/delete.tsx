import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Delete } from "../components";

const stories = storiesOf("Elements|Delete", module);

stories.add("Basic", () => <Delete />);

stories.add("Sizes", () => (
  <>
    <Delete size="small" />
    <Delete size="medium" />
    <Delete size="large" />
  </>
));
