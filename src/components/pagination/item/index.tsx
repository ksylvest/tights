import React from "react";

export const Item: React.FC<{
  children?: React.ReactNode;
}> = ({ ...props }) => <li {...props} />;
