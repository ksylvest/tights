import cn from "classnames";
import type { FC } from "react";

export const Title: FC<JSX.IntrinsicElements["p"]> = ({
  className,
  ...props
}) => <p {...props} className={cn("modal-card-title", className)} />;
