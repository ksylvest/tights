import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

type Props = {
  current?: boolean;
};

export const PaginationLink: FC<
  Omit<ComponentProps<"a">, keyof Props> & Props
> = ({ current, className, ...props }) => (
  <a
    {...props}
    className={clsx("pagination-link", current && "is-current", className)}
  />
);
