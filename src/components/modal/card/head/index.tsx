import * as React from "react";

export const Head: React.FC<{
  children?: React.ReactNode;
}> = (props) => <div {...props} className="modal-card-head" />;
