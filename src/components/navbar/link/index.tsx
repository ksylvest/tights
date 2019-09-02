import * as React from "react";

export const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props,
) => <a {...props} className="navbar-link" />;
