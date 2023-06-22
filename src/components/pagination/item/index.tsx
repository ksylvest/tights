import type { FC } from "react";

export const Item: FC<JSX.IntrinsicElements["li"]> = ({ ...props }) => (
  <li {...props} />
);
