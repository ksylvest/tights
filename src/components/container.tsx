import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const Container: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("container", className)} />;
