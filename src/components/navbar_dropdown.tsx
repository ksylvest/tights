import cn from "classnames";
import type { ComponentProps, FC } from "react";

type Props = {
  boxed?: boolean;
  direction?: "right" | "left";
};

export const NavbarDropdown: FC<
  Omit<ComponentProps<"div">, keyof Props> & Props
> = ({ boxed, direction, className, ...props }) => (
  <div
    {...props}
    className={cn(
      "navbar-dropdown",
      boxed && "is-boxed",
      direction && `is-${direction}`,
      className
    )}
  />
);
