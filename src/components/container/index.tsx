import React from "react";

export const Container: React.FC<{
  children?: React.ReactNode;
}> = (props) => <div {...props} className="container" />;
