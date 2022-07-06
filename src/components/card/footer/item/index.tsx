import * as React from "react";

const DEFAULT_TAG = "p";

export const Item: React.FC<
  React.HTMLAttributes<HTMLElement> & {
    tag?: "a" | "p";
    children?: React.ReactNode;
  }
> = ({ tag: Tag = DEFAULT_TAG, ...props }) => (
  <Tag className="card-footer-item" {...props} />
);
