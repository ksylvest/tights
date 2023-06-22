import cn from "classnames";
import type { ComponentProps, ElementType, FC } from "react";

type Props<T extends ElementType> = {
  tag?: T;
};

export const Title = <T extends ElementType = "p">({
  className,
  tag,
  ...props
}: Props<T> & Omit<ComponentProps<T>, keyof Props<T>>) => {
  const Tag = tag ?? "p";
  return <Tag {...props} className={cn("title", className)} />;
};
