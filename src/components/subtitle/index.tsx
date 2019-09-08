import * as React from "react";

export const Subtitle: React.FC<{
  tag?: React.FC<{ className?: string }>;
}> = ({ tag: T = "p", ...props }) => <T {...props} className="subtitle" />;
