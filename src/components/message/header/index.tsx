import cn from "classnames";
import type { FC } from "react";

export const Header: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("message-header", className)} />;
