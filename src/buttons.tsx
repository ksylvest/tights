import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

import type { Alignment } from "./types/alignment";

type Props = {
  addons?: boolean;
  alignment?: Alignment;
};

export const Buttons: FC<Omit<ComponentProps<"div">, keyof Props> & Props> = ({
  addons,
  alignment,
  className,
  ...props
}) => (
  <div
    {...props}
    className={clsx(
      "buttons",
      addons && "has-addons",
      alignment && `is-${alignment}`,
      className,
    )}
  />
);
