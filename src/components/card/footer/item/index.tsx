import * as React from "react";

const DEFAULT_TAG = "p";

export const Item: React.FC<
  {
    tag?: "a" | "p";
  } & React.HTMLAttributes<HTMLElement>
> = ({ tag: Tag = DEFAULT_TAG, ...props }) => (
  <Tag className="card-footer-item" {...props} />
);
