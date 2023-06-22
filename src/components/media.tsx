import cn from "classnames";
import type { FC } from "react";

import { MediaContent } from "./media_content";
import { MediaLeft } from "./media_left";
import { MediaRight } from "./media_right";

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
