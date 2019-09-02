import * as React from "react";

export const Prev: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  ...props
}) => <a {...props} className="pagination-previous" />;
