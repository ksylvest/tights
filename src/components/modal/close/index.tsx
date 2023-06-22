import cn from "classnames";
import type { FC } from "react";

import type { Size } from "@src/types/size";

type Props = {
  size?: Size;
};

export const ModalClose: FC<
  Omit<JSX.IntrinsicElements["button"], keyof Props> & Props
> = ({ size, className, ...props }) => (
  <button
    {...props}
    type="button"
    className={cn("modal-close", size && `is-${size}`, className)}
  />
);
