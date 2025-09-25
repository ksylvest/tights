import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const CardFooterItem: FC<ComponentProps<"a">> = ({
  className,
  ...props
}) => <a className={clsx("card-footer-item", className)} {...props} />;
