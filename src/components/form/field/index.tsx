import cn from "classnames";
import * as React from "react";

export const Field: React.FC<{
  grouped?: boolean;
  children?: React.ReactNode;
}> = ({ grouped, ...props }) => (
  <div {...props} className={cn("field", grouped && "is-grouped")} />
);
