import cn from "classnames";
import React from "react";

export const Columns: React.FC<{
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;
  centered?: boolean;
  vcentered?: boolean;
  multiline?: boolean;
  gap?: "gapless" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 6 | 7 | 8;
  children?: React.ReactNode;
}> = ({
  mobile,
  tablet,
  desktop,
  centered,
  vcentered,
  multiline,
  gap,
  ...props
}) => (
  <div
    {...props}
    className={cn(
      "columns",
      gap && `is-variable is-${gap}`,
      mobile && "is-mobile",
      tablet && "is-tablet",
      desktop && "is-desktop",
      multiline && "is-multiline",
      centered && "is-centered",
      vcentered && "is-vcentered"
    )}
  />
);
