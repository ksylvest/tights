import * as React from "react";

export const Menu: React.FC<{
  children?: React.ReactNode;
}> = (props) => <div {...props} className="dropdown-menu" />;
