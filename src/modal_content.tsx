import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const ModalContent: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("modal-content", className)} />;
