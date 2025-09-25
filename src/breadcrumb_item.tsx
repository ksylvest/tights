import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

type Props = {
  active?: boolean;
};

export const BreadcrumbItem: FC<
  Omit<ComponentProps<"li">, keyof Props> & Props
> = ({ active, className, ...props }) => (
  <li {...props} className={clsx(active && "is-active", className)} />
);
