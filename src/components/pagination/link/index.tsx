import cn from "classnames";
import * as React from "react";

export const Link: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    current?: boolean;
    children?: React.ReactNode;
  }
> = ({ current, ...props }) => (
  <a {...props} className={cn("pagination-link", current && "is-current")} />
);
