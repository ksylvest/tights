import type { FC } from "react";

export const Ellipsis: FC<JSX.IntrinsicElements["span"]> = ({ ...props }) => (
  <span {...props} className="pagination-ellipsis">
    …
  </span>
);
