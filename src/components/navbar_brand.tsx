import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const NavbarBrand: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("navbar-brand", className)} />;
