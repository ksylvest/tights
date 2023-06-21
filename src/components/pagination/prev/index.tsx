import React from "react";

export const Prev: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
  }
> = ({ ...props }) => <a {...props} className="pagination-previous" />;
