import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const ModalContent: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("modal-content", className)} />;
