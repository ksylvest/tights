import cn from "classnames";
import type { ComponentProps, FC } from "react";

type Props = {
  dimensions?: 16 | 24 | 32 | 48 | 64 | 96;
  rounded?: boolean;
  square?: boolean;
  ratio?: string;
};

export const Image: FC<Omit<ComponentProps<"img">, keyof Props> & Props> = ({
  dimensions,
  rounded,
  square,
  ratio,
  children,
  className,
  ...props
}) => (
  <figure
    className={cn(
      "image",
      ratio && `is-${ratio}`,
      square && "is-square",
      dimensions && `is-${dimensions}x${dimensions}`,
      className
    )}
  >
    <picture>
      {children}
      <img {...props} className={cn(rounded && "is-rounded")} />
    </picture>
  </figure>
);
