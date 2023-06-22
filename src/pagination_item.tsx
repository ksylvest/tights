import type { ComponentProps, FC } from "react";

export const PaginationItem: FC<ComponentProps<"li">> = ({ ...props }) => (
  <li {...props} />
);
