import cn from "classnames";
import type { FC } from "react";

export const CardImage: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("card-image", className)} />;
