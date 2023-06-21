import React from "react";

export const CTA: React.FC<{
  children?: React.ReactNode;
}> = (props) => <span {...props} className="file-cta" />;
