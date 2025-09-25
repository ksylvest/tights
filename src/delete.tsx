import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

import type { Size } from "./types/size";

type Props = {
  size?: Size;
};

export const Delete: FC<
  Omit<ComponentProps<"button">, keyof Props> & Props
> = ({ size, className, ...props }) => (
  <button
    {...props}
    type="button"
    className={clsx("delete", size && `is-${size}`, className)}
  />
);
