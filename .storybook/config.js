import { configure } from "@storybook/react";

import "bulma/css/bulma.css";

configure(() => {
  require("../src/stories/index.ts");
}, module);
