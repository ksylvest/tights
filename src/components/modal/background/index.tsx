import cn from "classnames";
import type { FC } from "react";

export const Background: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("modal-background", className)} />;
