import type { ComponentProps, ElementType } from "react";

import { clsx } from "clsx";

type Alignment = "centered" | "justified" | "left" | "right";
type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type TextWeight = "light" | "normal" | "medium" | "semibold" | "bold";

type Props<T extends ElementType> = {
  tag?: T;
  alignment?: Alignment;
  size?: Size;
  capitalized?: boolean;
  lowercase?: boolean;
  uppercase?: boolean;
  italic?: boolean;
  underlined?: boolean;
  textweight?: TextWeight;
};

export const Typography = <T extends ElementType = "p">({
  alignment,
  size,
  capitalized,
  lowercase,
  uppercase,
  italic,
  underlined,
  textweight,
  className,
  tag,
  ...props
}: Props<T> & Omit<ComponentProps<T>, keyof Props<T>>) => {
  const Tag = tag ?? "p";
  return (
    <Tag
      {...props}
      className={clsx(
        "title",
        alignment && `has-text-${alignment}`,
        size && `is-size-${size}`,
        capitalized && "is-capitalized",
        uppercase && "is-uppercase",
        lowercase && "is-lowercase",
        italic && "is-italic",
        underlined && "is-underlined",
        textweight && `has-text-weight-${textweight}`,
        className,
      )}
    />
  );
};
