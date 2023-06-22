import { storiesOf } from "@storybook/react";
import cn from "classnames";
import type { FC } from "react";

import { Columns } from "../components";
import { Column } from "../components";
import { Image } from "../components";

const UNSPLASH_IDS = [
  "aj5ZgaE2Gi0",
  "xEY0dtFfon0",
  "uYcEkcREK7E",
  "kn7FVkDwLfU",
  "2TK6cWlqiyU",
  "6qIXonfBg1E",
  "brKCHU0Xo5s",
  "4gNhkdomIRc",
];

const stories = storiesOf("Columns", module);

stories.add("Basic", () => (
  <Columns multiline mobile tablet desktop>
    {UNSPLASH_IDS.map((unsplashID, key) => (
      <Column key={key} mobile={6} tablet={4} desktop={3}>
        <Image src={`https://source.unsplash.com/${unsplashID}/800x800`} />
      </Column>
    ))}
  </Columns>
));
