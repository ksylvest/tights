import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

type Props = {
  active?: boolean;
};

export const TabsItem: FC<Omit<ComponentProps<"li">, keyof Props> & Props> = ({
  active,
  className,
  ...props
}) => <li {...props} className={clsx(active && "is-active", className)} />;
