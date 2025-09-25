import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

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
    className={clsx(
      "textarea",
      color && `is-${color}`,
      size && `is-${size}`,
      rounded && "is-rounded",
      className,
    )}
  />
);
