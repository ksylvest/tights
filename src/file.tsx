import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

import type { Alignment } from "./types/alignment";
import type { Color } from "./types/color";
import type { Size } from "./types/size";

type Props = {
  name?: string;
  alignment?: Alignment;
  color?: Color;
  size?: Size;
  boxed?: boolean;
  fullwidth?: boolean;
};

export const File: FC<Omit<ComponentProps<"div">, keyof Props> & Props> = ({
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
    className={clsx(
      "file",
      boxed && "is-boxed",
      fullwidth && "is-fullwidth",
      name && "has-name",
      alignment && `is-${alignment}`,
      color && `is-${color}`,
      size && `is-${size}`,
      className,
    )}
  />
);
