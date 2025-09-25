import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const ModalBackground: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("modal-background", className)} />;
