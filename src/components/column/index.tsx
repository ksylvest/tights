import cn from "classnames";
import * as React from "react";

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const Column: React.FC<{
  size?: Size;
  narrow?: boolean;
  mobile?: Size;
  tablet?: Size;
  desktop?: Size;
  children?: React.ReactNode;
}> = ({ size, mobile, tablet, desktop, narrow, ...props }) => (
  <div
    {...props}
    className={cn(
      "column",
      size && `is-${size}`,
      mobile && `is-${mobile}-mobile`,
      tablet && `is-${tablet}-tablet`,
      desktop && `is-${desktop}-desktop`,
      narrow && "is-narrow"
    )}
  />
);
