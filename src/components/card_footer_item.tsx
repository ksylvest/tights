import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const CardFooterItem: FC<ComponentProps<"a">> = ({
  className,
  ...props
}) => <a className={cn("card-footer-item", className)} {...props} />;
