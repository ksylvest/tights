import cn from "classnames";
import type { FC } from "react";

export const ModalContent: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("modal-content", className)} />;
