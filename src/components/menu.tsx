import cn from "classnames";
import type { FC } from "react";

export const Menu: FC<JSX.IntrinsicElements["aside"]> = ({
  className,
  ...props
}) => <aside {...props} className={cn("menu", className)} />;
