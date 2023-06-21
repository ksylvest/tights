import React from "react";

export const Label: React.FC<{
  children?: React.ReactNode;
}> = (props) => <label {...props} className="file-label" />;
