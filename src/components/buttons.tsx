import cn from "classnames";
import type { ComponentProps, FC } from "react";

import type { Alignment } from "../types/alignment";

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
    className={cn(
      "buttons",
      addons && "has-addons",
      alignment && `is-${alignment}`,
      className
    )}
  />
);
