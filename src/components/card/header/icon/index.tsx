import * as React from "react";

export const Icon: React.FC<
  React.HTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
  }
> = (props) => <a {...props} className="card-header-icon" />;
