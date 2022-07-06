import * as React from "react";

export const Ellipsis: React.FC<{
  children?: React.ReactNode;
}> = ({ ...props }) => (
  <span {...props} className="pagination-ellipsis">
    …
  </span>
);
