import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const ModalCardTitle: FC<ComponentProps<"p">> = ({
  className,
  ...props
}) => <p {...props} className={clsx("modal-card-title", className)} />;
