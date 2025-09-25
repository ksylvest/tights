import type { ComponentProps, FC } from "react";

import { clsx } from "clsx";

import type { Alignment } from "./types/alignment";
import type { Separator } from "./types/separator";
import type { Size } from "./types/size";

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
      size && `is-${size}`,
    )}
  />
);
