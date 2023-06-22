import cn from "classnames";
import type { ComponentProps, FC } from "react";

type Props = {
  active?: boolean;
};

export const DropdownItem: FC<
  Omit<ComponentProps<"a">, keyof Props> & Props
> = ({ active, ...props }) => (
  <a {...props} className={cn("dropdown-item", active && "is-active")} />
);
