import cn from "classnames";
import type { ComponentProps, FC } from "react";

type Props = {
  active?: boolean;
};

export const BreadcrumbItem: FC<
  Omit<ComponentProps<"li">, keyof Props> & Props
> = ({ active, className, ...props }) => (
  <li {...props} className={cn(active && "is-active", className)} />
);
