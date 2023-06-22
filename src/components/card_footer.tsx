import cn from "classnames";
import type { FC } from "react";

export const CardFooter: FC<JSX.IntrinsicElements["footer"]> = ({
  className,
  ...props
}) => <footer className={cn("card-footer", className)} {...props} />;
