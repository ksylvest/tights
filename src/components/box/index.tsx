import cn from "classnames";
import * as React from "react";

export const Box: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, ...props }) => (
  <div {...props} className={cn("box", className)} />
);
