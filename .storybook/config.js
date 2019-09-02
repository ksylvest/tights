import { configure, addDecorator } from "@storybook/react";
import { jsxDecorator } from 'storybook-addon-jsx';

import "bulma/css/bulma.css";

addDecorator(jsxDecorator);

configure(() => {
  require("../src/stories/index.ts");
}, module);
