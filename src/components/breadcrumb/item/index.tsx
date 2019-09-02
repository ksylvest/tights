import cn from "classnames";
import * as React from "react";

export const Item: React.FC<{
  active?: boolean;
}> = ({ active, ...props }) => (
  <li {...props} className={cn(active && "is-active")} />
);
