import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const CardContent: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("card-content", className)} />;
