import cn from "classnames";
import * as React from "react";

type Alignment = "left" | "centered" | "right";

export const Buttons: React.FC<{
  addons?: boolean;
  alignment?: Alignment;
}> = ({ addons, alignment, ...props }) => (
  <div
    {...props}
    className={cn(
      "buttons",
      addons && "has-addons",
      alignment && `is-${alignment}`,
    )}
  />
);
