import cn from "classnames";
import type { ComponentProps, FC } from "react";

import type { Size } from "../types/size";

type Props = {
  size?: Size;
};

export const Delete: FC<
  Omit<ComponentProps<"button">, keyof Props> & Props
> = ({ size, className, ...props }) => (
  <button
    {...props}
    type="button"
    className={cn("delete", size && `is-${size}`, className)}
  />
);
