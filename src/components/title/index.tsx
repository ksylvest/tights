import * as React from "react";

export const Title: React.FC<{
  tag?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}> = ({ tag: Tag = "p", ...props }) => <Tag {...props} className="title" />;
