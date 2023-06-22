import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const ModalBackground: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("modal-background", className)} />;
