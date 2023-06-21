import React from "react";

export const Title: React.FC<{
  tag?: React.FC<{ className?: string }>;
  children?: React.ReactNode;
}> = ({ tag: Tag = "p", ...props }) => <Tag {...props} className="title" />;
