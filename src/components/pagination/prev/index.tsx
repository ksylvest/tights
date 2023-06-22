import cn from "classnames";
import type { FC } from "react";

export const Prev: FC<JSX.IntrinsicElements["a"]> = ({
  className,
  ...props
}) => <a {...props} className={cn("pagination-previous", className)} />;
