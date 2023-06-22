import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const ModalCardTitle: FC<ComponentProps<"p">> = ({
  className,
  ...props
}) => <p {...props} className={cn("modal-card-title", className)} />;
