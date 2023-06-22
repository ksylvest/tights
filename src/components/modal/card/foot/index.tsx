import cn from "classnames";
import type { FC } from "react";

export const ModalCardFoot: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("modal-card-foot", className)} />;
