import type { ComponentProps, ElementType } from "react";

import { clsx } from "clsx";

type Props<T extends ElementType> = {
  tag?: T;
  dropdown?: boolean;
  hoverable?: boolean;
  active?: boolean;
};

export const NavbarItem = <T extends ElementType = "div">({
  dropdown,
  hoverable,
  active,
  tag,
  className,
  ...props
}: Omit<ComponentProps<T>, keyof Props<T>> & Props<T>) => {
  const Tag = tag ?? "div";

  return (
    <Tag
      {...props}
      className={clsx(
        "navbar-item",
        hoverable && "is-hoverable",
        active && "is-active",
        dropdown && "has-dropdown",
        className,
      )}
    />
  );
};
