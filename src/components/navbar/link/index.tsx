import React from "react";

export const Link: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
  }
> = (props) => <a {...props} className="navbar-link" />;
