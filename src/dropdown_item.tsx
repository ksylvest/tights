import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

type Props = {
  active?: boolean;
};

export const DropdownItem: FC<
  Omit<ComponentProps<"a">, keyof Props> & Props
> = ({ active, ...props }) => (
  <a {...props} className={clsx("dropdown-item", active && "is-active")} />
);
