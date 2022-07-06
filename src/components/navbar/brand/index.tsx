import * as React from "react";

export const Brand: React.FC<{
  children?: React.ReactNode;
}> = (props) => <div {...props} className="navbar-brand" />;
