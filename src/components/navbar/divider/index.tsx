import cn from "classnames";
import type { FC } from "react";

export const NavbarDivider: FC<JSX.IntrinsicElements["hr"]> = ({
  className,
  ...props
}) => <hr className={cn("navbar-divider", className)} />;
