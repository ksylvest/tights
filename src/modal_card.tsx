import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const ModalCard: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("modal-card", className)} />;
