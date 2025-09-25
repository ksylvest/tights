import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

import type { Color } from "./types/color";

type Props = {
  color?: Color;
};

export const Help: FC<Omit<ComponentProps<"p">, keyof Props> & Props> = ({
  color,
  className,
  ...props
}) => (
  <p {...props} className={clsx("help", color && `is-${color}`, className)} />
);
