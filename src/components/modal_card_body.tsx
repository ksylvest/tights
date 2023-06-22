import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const ModalCardBody: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("modal-card-body", className)} />;
