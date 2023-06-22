import cn from "classnames";
import type { ComponentProps, FC } from "react";

type Props = {
  addons?: boolean;
};

export const Tags: FC<Omit<ComponentProps<"div">, keyof Props> & Props> = ({
  addons,
  className,
  ...props
}) => (
  <div {...props} className={cn("tags", addons && "has-addons", className)} />
);
