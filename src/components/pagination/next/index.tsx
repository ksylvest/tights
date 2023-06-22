import cn from "classnames";
import type { FC } from "react";

export const Next: FC<JSX.IntrinsicElements["a"]> = ({
  className,
  ...props
}) => <a {...props} className={cn("pagination-next", className)} />;
