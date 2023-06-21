import React from "react";

export const Block: React.FC<{
  children?: React.ReactNode;
}> = (props) => <div {...props} className="panel-block" />;
