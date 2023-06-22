import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const ModalContent: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("modal-content", className)} />;
