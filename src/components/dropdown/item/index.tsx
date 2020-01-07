import cn from "classnames";
import * as React from "react";

export const Item: React.FC<{
  active?: boolean;
  tag?: "a" | "div";
} & React.HTMLAttributes<HTMLElement>> = ({
  active,
  tag: Tag = "div",
  ...props
}) => <Tag {...props} className={cn("dropdown-item", active && "is-active")} />;
