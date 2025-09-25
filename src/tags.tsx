import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

type Props = {
  addons?: boolean;
};

export const Tags: FC<Omit<ComponentProps<"div">, keyof Props> & Props> = ({
  addons,
  className,
  ...props
}) => (
  <div {...props} className={clsx("tags", addons && "has-addons", className)} />
);
