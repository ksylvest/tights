import cn from "classnames";
import type { FC } from "react";

import { MediaContent } from "./content";
import { MediaLeft } from "./left";
import { MediaRight } from "./right";

const Media: FC<JSX.IntrinsicElements["article"]> = ({
  className,
  ...props
}) => <article {...props} className={cn("media", className)} />;

const Combined = Object.assign(Media, {
  Content: MediaContent,
  Left: MediaLeft,
  Right: MediaRight,
});

export { Combined as Media };
