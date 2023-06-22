import cn from "classnames";
import type { FC } from "react";

const DEFAULT_ACTIVE = true;

type Props = {
  active?: boolean;
};

export const Modal: FC<
  Omit<JSX.IntrinsicElements["div"], keyof Props> & Props
> = ({ active = DEFAULT_ACTIVE, className, ...props }) => (
  <div {...props} className={cn("modal", active && "is-active", className)} />
);
