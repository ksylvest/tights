import React from "react";

export const List: React.FC<{
  children?: React.ReactNode;
}> = ({ ...props }) => <ul {...props} className="pagination-list" />;
