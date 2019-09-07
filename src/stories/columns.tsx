import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Columns } from "../components";
import { Column } from "../components";
import { Image } from "../components";

const SAMPLES = [
  { unsplashID: "aj5ZgaE2Gi0" },
  { unsplashID: "xEY0dtFfon0" },
  { unsplashID: "uYcEkcREK7E" },
  { unsplashID: "kn7FVkDwLfU" },
  { unsplashID: "2TK6cWlqiyU" },
  { unsplashID: "6qIXonfBg1E" },
  { unsplashID: "brKCHU0Xo5s" },
  { unsplashID: "4gNhkdomIRc" },
];

const stories = storiesOf("Columns", module);

stories.add("Basic", () => (
  <Columns multiline mobile tablet desktop>
    {SAMPLES.map(({ unsplashID }, key) => (
      <Column key={key} mobile={6} tablet={4} desktop={3}>
        <Image src={`https://source.unsplash.com/${unsplashID}/800x800`} />
      </Column>
    ))}
  </Columns>
));
