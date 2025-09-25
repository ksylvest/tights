import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

const DEFAULT_ACTIVE = true;

type Props = {
  active?: boolean;
};

export const Modal: FC<Omit<ComponentProps<"div">, keyof Props> & Props> = ({
  active = DEFAULT_ACTIVE,
  className,
  ...props
}) => (
  <div {...props} className={clsx("modal", active && "is-active", className)} />
);
