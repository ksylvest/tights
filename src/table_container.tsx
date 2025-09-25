import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const TableContainer: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("table-container", className)} />;
