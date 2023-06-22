import cn from "classnames";
import type { FC } from "react";

type Props = {
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;
  centered?: boolean;
  vcentered?: boolean;
  multiline?: boolean;
  gap?: "gapless" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 6 | 7 | 8;
};

export const Columns: FC<
  Omit<JSX.IntrinsicElements["div"], keyof Props> & Props
> = ({
  mobile,
  tablet,
  desktop,
  centered,
  vcentered,
  multiline,
  gap,
  className,
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
      vcentered && "is-vcentered",
      className
    )}
  />
);
