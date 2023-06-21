import React from "react";

export const Image: React.FC<{
  children?: React.ReactNode;
}> = (props) => <div {...props} className="card-image" />;
