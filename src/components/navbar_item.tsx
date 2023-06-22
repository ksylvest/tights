import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

type Props = {
  dropdown?: boolean;
  hoverable?: boolean;
  active?: boolean;
};

export const NavbarItem: FC<
  Omit<ComponentProps<"div">, keyof Props> & Props
> = ({ dropdown, hoverable, active, className, ...props }) => (
  <div
    {...props}
    className={clsx(
      "navbar-item",
      hoverable && "is-hoverable",
      active && "is-active",
      dropdown && "has-dropdown",
      className
    )}
  />
);
