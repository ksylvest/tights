import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const MessageBody: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("message-body", className)} />;
