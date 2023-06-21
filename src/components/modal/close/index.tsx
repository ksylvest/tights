import cn from "classnames";
import React from "react";

import { Size } from "../../../types";

export const Close: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: Size;
    children?: React.ReactNode;
  }
> = ({ size, ...props }) => (
  <button
    {...props}
    type="button"
    className={cn("modal-close", size && `is-${size}`)}
  />
);
