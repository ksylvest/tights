import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const ModalCardBody: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("modal-card-body", className)} />;
