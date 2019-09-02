import * as React from "react";

import { Block } from "./block";
import { Heading } from "./heading";
import { Icon } from "./icon";
import { Tabs } from "./tabs";

const Panel: React.FC = (props) => <nav {...props} className="panel" />;

const Combined = Object.assign(Panel, {
  Block,
  Heading,
  Icon,
  Tabs,
});

export { Combined as Panel };
