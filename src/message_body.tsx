import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const MessageBody: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("message-body", className)} />;
