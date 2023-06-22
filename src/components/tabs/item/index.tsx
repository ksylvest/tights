import cn from "classnames";
import type { FC } from "react";

type Props = {
  active?: boolean;
};

export const TabsItem: FC<
  Omit<JSX.IntrinsicElements["li"], keyof Props> & Props
> = ({ active, className, ...props }) => (
  <li {...props} className={cn(active && "is-active", className)} />
);
