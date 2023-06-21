import cn from "classnames";
import React from "react";

type Icons = "left" | "right" | "both";

export const Control: React.FC<{
  expanded?: boolean;
  icons?: Icons;
  children?: React.ReactNode;
}> = ({ expanded, icons, ...props }) => (
  <div
    {...props}
    className={cn(
      "control",
      expanded && "is-expanded",
      (icons === "left" || icons === "both") && "has-icons-left",
      (icons === "right" || icons === "both") && "has-icons-right"
    )}
  />
);
