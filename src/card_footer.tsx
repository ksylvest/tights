import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const CardFooter: FC<ComponentProps<"footer">> = ({
  className,
  ...props
}) => <footer className={clsx("card-footer", className)} {...props} />;
