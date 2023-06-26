import type { ComponentProps, FC, ReactNode } from "react";

export const Radio: FC<ComponentProps<"input"> & { children: ReactNode }> = ({
  children,
  ...props
}) => (
  <label className="radio">
    <input type="radio" {...props} /> {children}
  </label>
);
