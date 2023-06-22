import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const CardImage: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("card-image", className)} />;
