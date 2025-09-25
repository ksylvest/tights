import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

type Props = {
  boxed?: boolean;
  direction?: "right" | "left";
};

export const NavbarDropdown: FC<
  Omit<ComponentProps<"div">, keyof Props> & Props
> = ({ boxed, direction, className, ...props }) => (
  <div
    {...props}
    className={clsx(
      "navbar-dropdown",
      boxed && "is-boxed",
      direction && `is-${direction}`,
      className,
    )}
  />
);
