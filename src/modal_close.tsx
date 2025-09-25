import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

import type { Size } from "./types/size";

type Props = {
  size?: Size;
};

export const ModalClose: FC<
  Omit<ComponentProps<"button">, keyof Props> & Props
> = ({ size, className, ...props }) => (
  <button
    {...props}
    type="button"
    className={clsx("modal-close", size && `is-${size}`, className)}
  />
);
