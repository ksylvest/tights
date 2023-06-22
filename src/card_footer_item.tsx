import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const CardFooterItem: FC<ComponentProps<"a">> = ({
  className,
  ...props
}) => <a className={clsx("card-footer-item", className)} {...props} />;
