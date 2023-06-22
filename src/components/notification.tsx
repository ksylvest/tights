import cn from "classnames";
import type { ComponentProps, FC } from "react";

import type { Color } from "../types/color";

type Props = {
  color?: Color;
};

export const Notification: FC<
  Omit<ComponentProps<"div">, keyof Props> & Props
> = ({ color, className, ...props }) => (
  <div
    {...props}
    className={cn("notification", color && `is-${color}`, className)}
  />
);
