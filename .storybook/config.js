import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from '@storybook/addon-knobs';

import "bulma/css/bulma.css";

addDecorator(withKnobs);

configure(() => {
  require("../src/stories/index.ts");
}, module);
