import cn from "classnames";
import type { FC } from "react";

import type { Alignment } from "@src/types/alignment";

type Props = {
  addons?: boolean;
  alignment?: Alignment;
};

export const Buttons: FC<
  Omit<JSX.IntrinsicElements["div"], keyof Props> & Props
> = ({ addons, alignment, className, ...props }) => (
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