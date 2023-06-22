import cn from "classnames";
import type { FC } from "react";

type Color = "primary" | "info" | "success" | "warning" | "danger";
type Size = "small" | "medium" | "large";

type Props = {
  color?: Color;
  size?: Size;
  rounded?: boolean;
};

export const Textarea: FC<
  Omit<JSX.IntrinsicElements["textarea"], keyof Props> & Props
> = ({ color, size, rounded, className, ...props }) => (
  <textarea
    {...props}
    className={cn(
      "textarea",
      color && `is-${color}`,
      size && `is-${size}`,
      rounded && "is-rounded",
      className
    )}
  />
);
