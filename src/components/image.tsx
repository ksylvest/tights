import { clsx } from "clsx";
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
    className={clsx(
      "image",
      ratio && `is-${ratio}`,
      square && "is-square",
      dimensions && `is-${dimensions}x${dimensions}`,
      className
    )}
  >
    <picture>
      {children}
      <img {...props} className={clsx(rounded && "is-rounded")} />
    </picture>
  </figure>
);
