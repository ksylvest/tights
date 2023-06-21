import React from "react";

export const Heading: React.FC<{
  children?: React.ReactNode;
}> = (props) => <p {...props} className="panel-heading" />;
