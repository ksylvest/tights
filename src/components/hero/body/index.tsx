import React from "react";

export const Body: React.FC<{
  children?: React.ReactNode;
}> = (props) => <div {...props} className="hero-body" />;
