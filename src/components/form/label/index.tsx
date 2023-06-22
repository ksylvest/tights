import cn from "classnames";
import type { FC } from "react";

export const Label: FC<JSX.IntrinsicElements["label"]> = ({
  className,
  ...props
}) => <label {...props} className={cn("label", className)} />;
