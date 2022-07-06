import * as React from "react";

export const Container: React.FC<{
  children?: React.ReactNode;
}> = (props) => <div className="table-container" {...props} />;
