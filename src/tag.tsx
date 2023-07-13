import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

import type { Color } from "./types/color";
import type { Size } from "./types/size";

type Props = {
  delete?: boolean;
  rounded?: boolean;
  color?: Color;
  size?: Size;
};

export const Tag: FC<Omit<ComponentProps<"span">, keyof Props> & Props> = ({
  delete: deleting,
  rounded,
  color,
  size,
  className,
  ...props
}) => (
  <span
    {...props}
    className={clsx(
      "tag",
      color && `is-${color}`,
      size && `is-${size}`,
      rounded && "is-rounded",
      deleting && "is-delete",
      className,
    )}
  />
);
