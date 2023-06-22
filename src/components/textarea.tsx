import cn from "classnames";
import type { ComponentProps, FC } from "react";

type Color = "primary" | "info" | "success" | "warning" | "danger";
type Size = "small" | "medium" | "large";

type Props = {
  color?: Color;
  size?: Size;
  rounded?: boolean;
};

export const Textarea: FC<
  Omit<ComponentProps<"textarea">, keyof Props> & Props
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
