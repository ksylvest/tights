import cn from "classnames";
import type { FC } from "react";

export const PaginationList: FC<JSX.IntrinsicElements["ul"]> = ({
  className,
  ...props
}) => <ul {...props} className={cn("pagination-list", className)} />;
