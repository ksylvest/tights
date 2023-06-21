import React from "react";

export const Title: React.FC<{
  children?: React.ReactNode;
}> = (props) => <p {...props} className="card-header-title" />;
