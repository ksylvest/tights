import cn from "classnames";
import * as React from "react";

export const Tags: React.FC<{
  addons?: boolean;
}> = ({ addons, ...props }) => (
  <div {...props} className={cn("tags", addons && "has-addons")} />
);
