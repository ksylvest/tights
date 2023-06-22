import cn from "classnames";
import type { ComponentProps, FC } from "react";

import type { Size } from "../types/size";

type Props = {
  size?: Size;
};

export const ModalClose: FC<
  Omit<ComponentProps<"button">, keyof Props> & Props
> = ({ size, className, ...props }) => (
  <button
    {...props}
    type="button"
    className={cn("modal-close", size && `is-${size}`, className)}
  />
);
