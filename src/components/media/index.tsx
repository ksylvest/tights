import * as React from "react";

import { Content } from "./content";
import { Left } from "./left";
import { Right } from "./right";

const Media: React.FC<{
  children?: React.ReactNode;
}> = (props) => <article {...props} className="media" />;

const Combined = Object.assign(Media, {
  Content,
  Left,
  Right,
});

export { Combined as Media };
