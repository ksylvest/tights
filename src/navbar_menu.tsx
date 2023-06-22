import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

type Props = {
  active?: boolean;
};

export const NavbarMenu: FC<
  Omit<ComponentProps<"div">, keyof Props> & Props
> = ({ active, className, ...props }) => (
  <div
    {...props}
    className={clsx("navbar-menu", active && "is-active", className)}
  />
);
