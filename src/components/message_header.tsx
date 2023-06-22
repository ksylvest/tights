import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const MessageHeader: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("message-header", className)} />;
