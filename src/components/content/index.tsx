import * as React from "react";

export const Content: React.FC<{
  children?: React.ReactNode;
}> = (props) => <div {...props} className="content" />;
