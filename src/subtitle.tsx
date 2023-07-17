import { clsx } from "clsx";
import type { ComponentProps, ElementType, FC } from "react";

type Props<T extends ElementType> = {
  tag?: T;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  spaced?: boolean;
};

export const Subtitle = <T extends ElementType = "p">({
  className,
  tag,
  size,
  spaced,
  ...props
}: Props<T> & Omit<ComponentProps<T>, keyof Props<T>>) => {
  const Tag = tag ?? "p";
  return (
    <Tag
      {...props}
      className={clsx(
        "subtitle",
        size && `is-${size}`,
        spaced && "is-spaced",
        className,
      )}
    />
  );
};
