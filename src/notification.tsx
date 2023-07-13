import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

import type { Color } from "./types/color";

type Props = {
  color?: Color;
  light?: boolean;
};

export const Notification: FC<
  Omit<ComponentProps<"div">, keyof Props> & Props
> = ({ color, light, className, ...props }) => (
  <div
    {...props}
    className={clsx(
      "notification",
      color && `is-${color}`,
      light && "is-light",
      className,
    )}
  />
);
