import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const ModalCard: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("modal-card", className)} />;
