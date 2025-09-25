import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const ModalCardFoot: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("modal-card-foot", className)} />;
