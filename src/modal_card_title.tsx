import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const ModalCardTitle: FC<ComponentProps<"p">> = ({
  className,
  ...props
}) => <p {...props} className={clsx("modal-card-title", className)} />;
