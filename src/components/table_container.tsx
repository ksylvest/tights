import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const TableContainer: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("table-container", className)} />;
