import cn from "classnames";
import type { FC } from "react";

export const ModalBackground: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("modal-background", className)} />;
