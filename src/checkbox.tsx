import type { ComponentProps, FC, ReactNode } from "react";

export const Checkbox: FC<
  ComponentProps<"input"> & { children: ReactNode }
> = ({ children, ...props }) => (
  <label className="checkbox">
    <input type="checkbox" {...props} /> {children}
  </label>
);
