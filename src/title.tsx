import { clsx } from "clsx";
import type { ComponentProps, ElementType } from "react";

type Props<T extends ElementType> = {
  tag?: T;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  spaced?: boolean;
};

export const Title = <T extends ElementType = "p">({
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
        "title",
        size && `is-${size}`,
        spaced && "is-spaced",
        className,
      )}
    />
  );
};
