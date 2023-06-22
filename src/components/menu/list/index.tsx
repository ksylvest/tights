import cn from "classnames";
import type { FC } from "react";

export const MenuList: FC<JSX.IntrinsicElements["ul"]> = ({
  className,
  ...props
}) => <ul {...props} className={cn("menu-list", className)} />;
