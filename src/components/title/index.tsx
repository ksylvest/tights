import * as React from "react";

export const Title: React.FC<{
  tag?: React.FC<{ className?: string }>;
}> = ({ tag: Tag = "p", ...props }) => <Tag {...props} className="title" />;
