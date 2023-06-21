import React from "react";

export const Header: React.FC<{
  children?: React.ReactNode;
}> = (props) => <div {...props} className="message-header" />;
