import cn from "classnames";
import type { FC } from "react";

type Props = {
  current?: boolean;
};

export const PaginationLink: FC<
  Omit<JSX.IntrinsicElements["a"], keyof Props> & Props
> = ({ current, className, ...props }) => (
  <a
    {...props}
    className={cn("pagination-link", current && "is-current", className)}
  />
);
