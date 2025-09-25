import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

import type { Color } from "./types/color";

type Props = {
  color?: Color;
};

export const Navbar: FC<Omit<ComponentProps<"nav">, keyof Props> & Props> = ({
  color,
  className,
  ...props
}) => (
  <nav
    {...props}
    className={clsx("navbar", color && `is-${color}`, className)}
  />
);
