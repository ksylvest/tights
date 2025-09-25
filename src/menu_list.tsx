import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

export const MenuList: FC<ComponentProps<"ul">> = ({ className, ...props }) => (
  <ul {...props} className={clsx("menu-list", className)} />
);
