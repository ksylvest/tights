import cn from "classnames";
import type { FC } from "react";

type Props = {
  grouped?: boolean;
};

export const Field: FC<
  Omit<JSX.IntrinsicElements["div"], keyof Props> & Props
> = ({ grouped, className, ...props }) => (
  <div {...props} className={cn("field", grouped && "is-grouped", className)} />
);
