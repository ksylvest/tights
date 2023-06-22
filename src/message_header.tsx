import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const MessageHeader: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("message-header", className)} />;
