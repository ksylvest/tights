import cn from "classnames";
import * as React from "react";

export const Box: React.FC<{
  className?: string;
}> = ({ className, ...props }) => (
  <div {...props} className={cn("box", className)} />
);
