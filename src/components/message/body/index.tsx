import cn from "classnames";
import type { FC } from "react";

export const MessageBody: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...props
}) => <div {...props} className={cn("message-body", className)} />;
