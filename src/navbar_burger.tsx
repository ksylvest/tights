import type { ComponentProps, ElementType } from "react";

import { clsx } from "clsx";

type Props<T extends ElementType> = {
  tag?: T;
  active?: boolean;
};

export const NavbarBurger = <T extends ElementType = "a">({
  active,
  tag,
  className,
  ...props
}: Omit<ComponentProps<T>, keyof Props<T>> & Props<T>) => {
  const Tag = tag ?? "a";

  return (
    <Tag
      role="button"
      aria-label="menu"
      aria-expanded={active}
      className={clsx("navbar-burger", active && "is-active", className)}
      {...props}
    >
      <span />
      <span />
      <span />
    </Tag>
  );
};
