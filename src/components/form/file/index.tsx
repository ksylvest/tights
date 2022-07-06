import cn from "classnames";
import * as React from "react";

import { CTA } from "./cta";
import { Icon } from "./icon";
import { Input } from "./input";
import { Label } from "./label";
import { Name } from "./name";

import { Alignment, Color, Size } from "../../../types";

const File: React.FC<{
  name?: string;
  alignment?: Alignment;
  color?: Color;
  size?: Size;
  boxed?: boolean;
  fullwidth?: boolean;
  children?: React.ReactNode;
}> = ({ name, alignment, color, size, boxed, fullwidth, ...props }) => (
  <div
    {...props}
    className={cn(
      "file",
      boxed && "is-boxed",
      fullwidth && "is-fullwidth",
      name && "has-name",
      alignment && `is-${alignment}`,
      color && `is-${color}`,
      size && `is-${size}`
    )}
  />
);

const Combined = Object.assign(File, {
  CTA,
  Icon,
  Input,
  Label,
  Name,
});

export { Combined as File };
