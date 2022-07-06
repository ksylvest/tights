import * as React from "react";

export const Name: React.FC<{
  children?: React.ReactNode;
}> = (props) => <span {...props} className="file-name" />;
