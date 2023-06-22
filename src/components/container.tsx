import cn from "classnames";
import type { ComponentProps, FC } from "react";

export const Container: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => <div {...props} className={cn("container", className)} />;
