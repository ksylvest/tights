import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const CardFooter: FC<ComponentProps<"footer">> = ({
  className,
  ...props
}) => <footer className={clsx("card-footer", className)} {...props} />;
