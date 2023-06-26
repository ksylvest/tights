import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

import type { Color } from "./types/color";

type Props = {
  color?: Color;
};

export const Notification: FC<
  Omit<ComponentProps<"div">, keyof Props> & Props
> = ({ color, className, ...props }) => (
  <div
    {...props}
    className={clsx("notification", color && `is-${color}`, className)}
  />
);