import * as React from "react";

export const Left: React.FC<{
  children?: React.ReactNode;
}> = (props) => <div {...props} className="media-left" />;
