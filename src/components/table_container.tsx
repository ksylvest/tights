import cn from "classnames";
import type { FC } from "react";

export const TableContainer: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("table-container", className)} />;
