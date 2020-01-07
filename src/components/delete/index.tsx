import cn from "classnames";
import * as React from "react";

import { Size } from "../../types";

export const Delete: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Size;
}> = ({ size, ...props }) => (
  <button
    {...props}
    type="button"
    className={cn("delete", size && `is-${size}`)}
  />
);
