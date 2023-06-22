import cn from "classnames";
import type { FC } from "react";

export const Heading: FC<JSX.IntrinsicElements["p"]> = ({
  className,
  ...props
}) => <p {...props} className={cn("panel-heading", className)} />;
