import cn from "classnames";
import type { FC } from "react";

export const Section: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("section", className)} />;
