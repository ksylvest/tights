import cn from "classnames";
import type { FC } from "react";

export const Image: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("card-image", className)} />;
