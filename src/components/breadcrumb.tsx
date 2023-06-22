import cn from "classnames";
import type { FC } from "react";

import type { Alignment } from "@src/types/alignment";
import type { Size } from "@src/types/size";
import type { Separator } from "@src/types/separator";

type Props = {
  alignment?: Alignment;
  separator?: Separator;
  size?: Size;
};

export const Breadcrumb: FC<
  Omit<JSX.IntrinsicElements["nav"], keyof Props> & Props
> = ({ alignment, separator, size, ...props }) => (
  <nav
    {...props}
    className={cn(
      "breadcrumb",
      alignment && `is-${alignment}`,
      separator && `has-${separator}-separator`,
      size && `is-${size}`
    )}
  />
);
