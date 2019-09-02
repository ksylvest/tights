import * as React from "react";

export const Ellipsis: React.FC = ({ ...props }) => (
  <span {...props} className="pagination-ellipsis">
    …
  </span>
);
