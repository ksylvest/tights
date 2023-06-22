import cn from "classnames";
import type { FC } from "react";

export const CardFooterItem: FC<JSX.IntrinsicElements["a"]> = ({
  className,
  ...props
}) => <a className={cn("card-footer-item", className)} {...props} />;
