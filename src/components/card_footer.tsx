import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const CardFooter: FC<ComponentProps<"footer">> = ({
  className,
  ...props
}) => <footer className={cn("card-footer", className)} {...props} />;
