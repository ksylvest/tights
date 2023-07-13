import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Props = {
  size?: Size;
  narrow?: boolean;
  mobile?: Size;
  tablet?: Size;
  desktop?: Size;
};

export const Column: FC<Omit<ComponentProps<"div">, keyof Props> & Props> = ({
  size,
  mobile,
  tablet,
  desktop,
  narrow,
  className,
  ...props
}) => (
  <div
    {...props}
    className={clsx(
      "column",
      size && `is-${size}`,
      mobile && `is-${mobile}-mobile`,
      tablet && `is-${tablet}-tablet`,
      desktop && `is-${desktop}-desktop`,
      narrow && "is-narrow",
      className,
    )}
  />
);
