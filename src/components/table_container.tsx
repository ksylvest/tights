import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const TableContainer: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("table-container", className)} />;
