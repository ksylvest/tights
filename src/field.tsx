import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

type Props = {
  grouped?: boolean;
};

export const Field: FC<Omit<ComponentProps<"div">, keyof Props> & Props> = ({
  grouped,
  className,
  ...props
}) => (
  <div
    {...props}
    className={clsx("field", grouped && "is-grouped", className)}
  />
);
