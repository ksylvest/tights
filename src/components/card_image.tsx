import { clsx } from "clsx";
import type { ComponentProps, FC } from "react";

export const CardImage: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={clsx("card-image", className)} />;
