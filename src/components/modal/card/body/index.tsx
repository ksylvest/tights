import cn from "classnames";
import type { FC } from "react";

export const Body: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("modal-card-body", className)} />;
