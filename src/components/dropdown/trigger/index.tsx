import React from "react";

export const Trigger: React.FC<{
  children?: React.ReactNode;
}> = (props) => <div {...props} className="dropdown-trigger" />;
