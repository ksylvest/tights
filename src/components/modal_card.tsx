import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const ModalCard: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("modal-card", className)} />;
