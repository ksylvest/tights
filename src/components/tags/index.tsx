import cn from "classnames";
import React from "react";

export const Tags: React.FC<{
  addons?: boolean;
  children?: React.ReactNode;
}> = ({ addons, ...props }) => (
  <div {...props} className={cn("tags", addons && "has-addons")} />
);
