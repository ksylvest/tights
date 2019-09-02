import cn from "classnames";
import * as React from "react";

type Icons = "left" | "right" | "both";

export const Control: React.FC<{
  expanded?: boolean;
  icons?: Icons;
}> = ({ expanded, icons, ...props }) => (
  <div
    {...props}
    className={cn(
      "control",
      expanded && "is-expanded",
      (icons === "left" || icons === "both") && "has-icons-left",
      (icons === "right" || icons === "both") && "has-icons-right",
    )}
  />
);
