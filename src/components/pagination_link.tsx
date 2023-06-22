import cn from "classnames";
import type { ComponentProps, FC } from "react";

type Props = {
  current?: boolean;
};

export const PaginationLink: FC<
  Omit<ComponentProps<"a">, keyof Props> & Props
> = ({ current, className, ...props }) => (
  <a
    {...props}
    className={cn("pagination-link", current && "is-current", className)}
  />
);
