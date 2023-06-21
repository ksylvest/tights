import React from "react";

export const Next: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
  }
> = ({ ...props }) => <a {...props} className="pagination-next" />;
