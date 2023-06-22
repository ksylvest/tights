import cn from "classnames";
import type { FC } from "react";

import type { Alignment } from "@src/types/alignment";
import type { Color } from "@src/types/color";
import type { Size } from "@src/types/size";

import { FileCTA } from "./cta";
import { FileIcon } from "./icon";
import { FileInput } from "./input";
import { FileLabel } from "./label";
import { FileName } from "./name";

type Props = {
  name?: string;
  alignment?: Alignment;
  color?: Color;
  size?: Size;
  boxed?: boolean;
  fullwidth?: boolean;
};

const File: FC<Omit<JSX.IntrinsicElements["div"], keyof Props> & Props> = ({
  name,
  alignment,
  color,
  size,
  boxed,
  fullwidth,
  className,
  ...props
}) => (
  <div
    {...props}
    className={cn(
      "file",
      boxed && "is-boxed",
      fullwidth && "is-fullwidth",
      name && "has-name",
      alignment && `is-${alignment}`,
      color && `is-${color}`,
      size && `is-${size}`,
      className
    )}
  />
);

const Combined = Object.assign(File, {
  CTA: FileCTA,
  Icon: FileIcon,
  Input: FileInput,
  Label: FileLabel,
  Name: FileName,
});

export { Combined as File };
