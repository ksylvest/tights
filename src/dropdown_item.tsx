import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

type Props = {
  active?: boolean;
};

export const DropdownItem: FC<
  Omit<ComponentProps<"a">, keyof Props> & Props
> = ({ active, ...props }) => (
  <a {...props} className={clsx("dropdown-item", active && "is-active")} />
);
