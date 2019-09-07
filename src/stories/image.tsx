import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Image } from "../components";

const stories = storiesOf("Elements|Image", module);

const SAMPLE_URL = "https://source.unsplash.com/4rDCa5hBlCs/96x96";

stories.add("Basic", () => (
  <Image
    rounded={boolean("Rounded", false)}
    square={boolean("Square", false)}
    src={SAMPLE_URL}
    dimensions={48}
  />
));
