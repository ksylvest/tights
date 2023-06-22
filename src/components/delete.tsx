import cn from "classnames";
import type { FC } from "react";

import type { Size } from "../types/size";

type Props = {
  size?: Size;
};

export const Delete: FC<
  Omit<JSX.IntrinsicElements["button"], keyof Props> & Props
> = ({ size, className, ...props }) => (
  <button
    {...props}
    type="button"
    className={cn("delete", size && `is-${size}`, className)}
  />
);
