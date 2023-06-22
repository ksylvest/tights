import cn from "classnames";
import type { FC } from "react";

export const ModalCard: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("modal-card", className)} />;
