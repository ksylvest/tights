import * as React from "react";

export const Next: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  ...props
}) => <a {...props} className="pagination-next" />;
