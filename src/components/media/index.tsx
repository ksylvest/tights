import cn from "classnames";
import type { FC } from "react";

import { Content } from "./content";
import { Left } from "./left";
import { Right } from "./right";

const Media: FC<JSX.IntrinsicElements["article"]> = ({
  className,
  ...props
}) => <article {...props} className={cn("media", className)} />;

const Combined = Object.assign(Media, {
  Content,
  Left,
  Right,
});

export { Combined as Media };
