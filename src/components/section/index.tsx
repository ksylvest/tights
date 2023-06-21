import React from "react";

export const Section: React.FC<{
  children?: React.ReactNode;
}> = (props) => <div {...props} className="section" />;
