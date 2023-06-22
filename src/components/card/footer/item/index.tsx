import cn from "classnames";
import type { FC } from "react";

type Element = JSX.IntrinsicElements["a"] | JSX.IntrinsicElements["p"];

export const Item: FC<JSX.IntrinsicElements["a"]> = ({
  className,
  ...props
}) => <a className={cn("card-footer-item", className)} {...props} />;
