import React from "react";

export const Label: React.FC<{
  children?: React.ReactNode;
}> = (props) => <p {...props} className="menu-label" />;
