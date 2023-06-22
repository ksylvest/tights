import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

import type { Alignment } from "../types/alignment";
import type { Size } from "../types/size";
import type { Separator } from "../types/separator";

type Props = {
  alignment?: Alignment;
  separator?: Separator;
  size?: Size;
};

export const Breadcrumb: FC<
  Omit<ComponentProps<"nav">, keyof Props> & Props
> = ({ alignment, separator, size, ...props }) => (
  <nav
    {...props}
    className={clsx(
      "breadcrumb",
      alignment && `is-${alignment}`,
      separator && `has-${separator}-separator`,
      size && `is-${size}`
    )}
  />
);
