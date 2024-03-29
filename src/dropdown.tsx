import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

type Props = {
  alignment?: "right" | "left";
  active?: boolean;
  hoverable?: boolean;
};

export const Dropdown: FC<Omit<ComponentProps<"div">, keyof Props> & Props> = ({
  alignment,
  active,
  hoverable,
  className,
  ...props
}) => (
  <div
    {...props}
    className={clsx(
      "dropdown",
      active && "is-active",
      hoverable && "is-hoverable",
      alignment && `is-${alignment}`,
      className,
    )}
  />
);
